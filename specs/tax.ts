import { fakeVat } from "italian-vat-better";
 
export async function getValidRandomVATIT () {
    let vatNumber = "";
    do {
        vatNumber = fakeVat();
    } while (!vatNumber.startsWith("4"));
 
    console.log(vatNumber);     // random valid Italian VAT starting with 4
    return vatNumber;
}
getValidRandomVATIT();