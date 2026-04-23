// future dynamic step store flow simulation


// step 1: convertibleValue
// this is what exists in the real codebase
// .normal = the raw backend value
// 


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

}