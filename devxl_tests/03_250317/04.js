/*

Shopping Cart Billing

An e-commerce company is currently celebrating ten years in business. They are having a sale to honor their privileged members, those who have been using their services for the past five years. They receive the best discounts indicated by any discount tags attached to the product. Determine the minimum cost to purchase all products listed. As each potential price is calculated, truncate it to its integer part before adding it to the total. Return the cost to purchase all items as an integer.
There are three types of discount tags :
Type 0: discounted price, the item is sold for a given price.
Type 1: percentage discount, the customer is given a fixed percentage discount from the retail price.
Type 2: fixed discount, the customer is given a fixed amount off from the retail price.
Example
products = [['10', 'd0', 'd1'], ['15', 'EMPTY', 'EMPTY'], ['20', 'd1', 'EMPTY']]
discounts = [['d0','1','27'], ['d1', '2', '5']]
The products array elements are in the form ['price', 'tag 1', 'tag 2', ..., 'tag m-1']. There may be zero or more discount codes associated with a product. Discount tags in the products array may be 'EMPTY' which is the same as a null amountue. The discounts array elements are in the form ['tag', 'type', 'amount'].
If a privileged member buys product 1 listed at a price of 10 with two discounts available:
Under discount d0 of type 1, the discounted price is 10 - 10 0.27 = 7.30, round to 7.
Under discount d1 of type 2, the discounted price is 10 - 5 = 5.
The price to purchase the product 1 is the lower of the two, or 5 in this case
The second product is priced at 15 because there are no discounts available
The third product is priced at 20. Using discount tag d1 of type 2, the discounted price is 20 - 5 = 15
Notes: Not all items will have the maximum number of tags. Empty tags may not exist in input, or they may be filled with the string EMPTY. These are equiamountent as demonstrated in the example.
Function Description
Complete the function findLowestPrice in the editor below.
findLowestPrice has the following parameter(s):
[string] products[n][m]: a 2D array of product descriptors as strings: price followed by up to m-1 discount tags
[string] discounts[d] a 2D array of tag descriptors as strings: tag, type, amount
Returns
int: the total amount paid for all listed products, discounted to privileged members' pricing
Constraints
1 ≤ n, m, d ≤ 1000
tags are not unique
*/

/*
 * Complete the 'findLowestPrice' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. 2D_STRING_ARRAY products
 *  2. 2D_STRING_ARRAY discounts
 */

function findLowestPrice(products, discounts) {
    
    const discountFuncs = {
        // 'type': function(price, amount)
        // fixed price
        '0': (price, amount) => parseInt(amount),
        // percentage
        '1': (price, amount) => Math.floor(price * (1 - amount/100)),
        // fixed amount discount
        '2': (price, amount) => parseInt(price - amount)
    }

    let discountObj = {}
    for (let [tag, type, amount] of discounts) {
        // if the tag already exists we add a type/amount to it
        // if not, create the tag and set to empty array.
        if (!discountObj[tag]) {
            discountObj[tag] = []
        }
        discountObj[tag].push({type, amount})
    }
    
    function bestDiscount(basePrice, tags) {
        let prices=[basePrice]

        for (let tag of tags) {
            if (tag === 'EMPTY' || tag === '') continue
            
            // [] is defensive (iterate on an empty array instead of undefined property)
            let discounts = discountObj[tag] || []

            for (let {type, amount} of discounts) {
                let discountedPrice = discountFuncs[type](basePrice, amount)
                prices.push(discountedPrice)
            }
        }
        return Math.min(...prices)
    }
    
    let total = 0
    for (let [price, ...tags] of products) {
        total += bestDiscount(price, tags)
    }
    console.log(`total: ${total}`)

    return total
}

/*
Test case 1:
    6
    2
    100 dcoupon1
    50 dcoupon1
    30 dcoupon1
    100 dcoupon2
    50 dcoupon2
    30 dcoupon2
    6
    3
    dcoupon1 0 60
    dcoupon1 1 30
    dcoupon1 1 20
    dcoupon2 2 20
    dcoupon2 1 85
    dcoupon2 0 15
*/
