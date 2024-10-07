/*

GROUP_CONCAT(expr 
            [ORDER BY {unsigned_integer | col_name | expr} ASC | DESC] 
            [SEPARATOR]
            
*/

SELECT 
    a.iban,
    group_concat(
        t.amount
        ORDER BY t.dt ASC 
        SEPARATOR ' + '
    ) AS transactions,
    CONCAT('$', FORMAT(SUM(CAST(REPLACE(t.amount, '$', '') AS DECIMAL(10, 2))), 2)) AS total
FROM 
    accounts a
JOIN 
    transactions t ON a.id = t.account_id
WHERE 
    MONTH(t.dt) = 9
GROUP BY 
    a.iban
ORDER BY 
    COUNT(t.amount) DESC, 
    SUM(CAST(REPLACE(t.amount, '$', '') AS DECIMAL(10, 2))) DESC;