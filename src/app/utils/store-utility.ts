export class StoreUtility {
    // [{id,...},{id,...}] -> normal array
    // entities: {id:{}} -> normalized format
    static normalize(entityArray: Entity[]) {
        return entityArray.reduce((previousValue, currentValue) => {
            return {...previousValue, ...{[currentValue.id]: currentValue}};
        }, {});
    }
    // {101: {id: 101, name: "ris"}}; -> entities
    // [{id: 101, name:"rish"}];
    static unNormalized(entities: { [id: number]:any }) {
        if(!entities){
            return [];
        } else {
            return Object.keys(entities).map((key: any)  => entities[key]);
        }
    }

    static filterDuplicateIds(ids: number[]){
        return ids.filter((elem, index, self) => index === self.indexOf(elem));
    }

    static removeKey(entities: { [id: number]: any }, id: any) {
        const newObj = {...entities};
        delete newObj[id];
        return newObj;
    }
}

interface Entity {
    id: any;
}