export interface generalDetails {
    
    header: string | string[],
    img_num: string | string[] | boolean,

    form?: boolean,
    
    frequency?: string | string[],
    description: {p1: string, p2?: string}
}

export interface particularDetails {
    form?: boolean,
    description: {p1: string, p2: string}
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