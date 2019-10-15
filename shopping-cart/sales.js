const SALES_KEY = 'sales';

const salesExists = () => localStorage.getItem(SALES_KEY);
export const setSales = (salesArr) => localStorage.setItem(SALES_KEY, JSON.stringify(salesArr));
export const getCart = () => JSON.parse(localStorage.getItem(SALES_KEY));

export class SalesArray {
    constructor(sales) {
        this.sales = sales.slice();
    }

    getSales() {
        return !this.sales ? [] : this.sales;
    }

    placeOrder(cartArr) {
        let productFound = false;
        this.cartArr.foreach(item => {
            this.sales.foreach(soldProduct => {
                if (item.id === soldProduct.id) {
                    productFound = true;
                    soldProduct.id++;
                }
            });
            if (!productFound) this.sales.push(item);
        });
    }
}
