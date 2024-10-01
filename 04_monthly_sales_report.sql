SELECT 
    p.name AS name, 
    CASE 
        WHEN MONTH(s.dt) = 1 THEN 'January' 
        WHEN MONTH(s.dt) = 2 THEN 'February' 
        WHEN MONTH(s.dt) = 3 THEN 'March' 
    END AS month, 
    ROUND(SUM(s.amount), 2) AS total_sales
FROM 
    sales s
JOIN 
    products p ON s.product_id = p.id
WHERE 
    s.dt >= '2024-01-01' 
    AND s.dt < '2024-04-01'
GROUP BY 
    MONTH, p.name, MONTH(s.dt)
ORDER BY 
    MONTH(s.dt) ASC, total_sales DESC;