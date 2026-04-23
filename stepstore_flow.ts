// future dynamic step store flow simulation


// step 1: convertibleValue
// this is what exists in the real codebase
// .normal = the raw backend value
// .locale 


class ConvertibleValue {
    normal: number
    readonly unitSymbol: string
    readonly conversionFactor: number

    constructor(normal: number = 0, unitSymbol: string, conversionFactor: number = 1) {
        this.normal = normal
        this.unitSymbol = unitSymbol
        this.conversionFactor = conversionFactor
    }

    get locale(): number {
        return parseFloat((this.normal * this.conversionFactor).toFixed(4))
    }

    get unitLocale(): string {
        return this.unitSymbol
    }

    get localeWithUnit(): string {
        return `${this.locale} ${this.unitSymbol}`
    }
}

class ConvertibleAngleValue extends ConvertibleValue {
    constructor(normal: number = 0) {
        super(normal, '°', 1)
    }
}

class ConvertibleDistanceValue extends ConvertibleValue {
    constructor(normal: number = 0) {
        super(normal, 'mm', 1)
    }
}

class ConvertibleThicknessValue extends ConvertibleValue {
    constructor(normal: number = 0) {
        super(normal, 'mm', 1)
    }
}

class ConvertibleSpeedValue extends ConvertibleValue {
    constructor(normal: number = 0) {
        super(normal, '%', 1)
    }
}

class ConvertiblePressureValue extends ConvertibleValue {
    constructor(normal: number = 0) {
        super(normal, '%', 1)
    }
}

// step 2: the type -> class mapping
// this replaces all the harcoded fromstepfloatdto2convertibleValue
// calls in the stepstore.ts

type ConvertibleConstructor = new (value?: number) => ConvertibleValue

const Type_To_Convertible: Record<string, ConvertibleConstructor> = {
    'angle': ConvertibleAngleValue,
    'distance': ConvertibleDistanceValue,
    'thickness': ConvertibleThicknessValue,
    'speed': ConvertibleSpeedValue,
    'pressure': ConvertiblePressureValue
}

// step 3: future backend dto
// this is what the backend will send in the future
// no more named sub objects. just a flat list of fields
// the type tells us which convertiblevalue to use

interface futurefieldDto {
    id: string
    value: number
    type: string
    min: number
    max: number
    editable: boolean
    lock: boolean
    hidden: boolean
    used: boolean 
}


interface FutureStepDto {
    id: string
    fields: futurefieldDto[]
}


// mock data simulating what the backed will send
const mock_backend_response: FutureStepDto = {
    id: "step-001",
    fields: [
        { 
            id: "foldingAngle.angle",
            value: 90.0,
            type: "angle",
            min: 0,
            max: 180,
            editable: false,
            lock: false, 
            hidden: false, 
            used: true 
        },
        
    { id: "foldingAngle.compensation",    value: 0.5,   type: "angle",    min: -5,  max: 5,    editable: true,  lock: false,  hidden: false, used: true },
    { id: "backgauge.position0",          value: 120.0, type: "distance", min: 0,   max: 500,  editable: false, lock: false,  hidden: false, used: true },
    { id: "backgauge.compensation",       value: 2.0,   type: "distance", min: -10, max: 10,   editable: true,  lock: false,  hidden: false, used: true },
    { id: "opening.height",               value: 300.0, type: "distance", min: 0,   max: 600,  editable: true,  lock: false,  hidden: false, used: true },
    { id: "bendingbeamSpeed.speed",       value: 50.0,  type: "speed",    min: 0,   max: 100,  editable: true,  lock: true,   hidden: false, used: true },
    { id: "materialThickness.adjustment", value: 0.0,   type: "thickness",min: -2,  max: 2,    editable: true,  lock: false,  hidden: false, used: true },
    { id: "clampingpressure.press",       value: 75.0,  type: "pressure", min: 0,   max: 100,  editable: true,  lock: false,  hidden: true,  used: false },

    ]
}