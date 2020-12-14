import { Company } from './company';

export class Coupon{


    public constructor(
        public company?:Company,
        public company_id?:number,
        public id?: number,
        public title?: string,
        public startDate?: string,
        public endDate?: string,
        public category?: string,
        public amount?: number,
        public description?: string,
        public price?: number,
        public imageURL?: string){}
 }

