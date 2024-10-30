export type Expense = {
    id: string;
    // We are NOT changing this to description. The lab is not
    // interally consistent. Leaving it as 'name' for now
    // is the best, otherwise we will have to change
    // all references from name to description
    name: string;
    cost: number;
};