export interface generalDetails {
    header: string | string[],
    img_num: string | string[]
}

export interface particularDetails {
    description: string
    specification: string,

    mechanical_properties: {
        
        length: number,
        width: number,
        height?: number,

        weight: number,
        color: string,
        material: string
    },

    charts: {
        0: string,
        1: string,
        header: string
    }
}