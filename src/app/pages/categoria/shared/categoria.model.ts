import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Categoria extends BaseResourceModel{
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
    ) {
        super();
    }

    static fromJson(jsonData: any): Categoria {
        return Object.assign(new Categoria(), jsonData);
    }
}