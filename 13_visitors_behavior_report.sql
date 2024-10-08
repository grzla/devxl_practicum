SELECT 
    CONCAT('Q', quarter, "'21") AS period,
    GROUP_CONCAT(CONCAT(type, '=', event_count) ORDER BY event_count DESC, type ASC SEPARATOR '; ') AS events
FROM (
    SELECT 
        QUARTER(STR_TO_DATE(dt, '%Y-%m-%d %H:%i:%s')) AS quarter,
        type,
        COUNT(*) AS event_count
    FROM 
        events
    WHERE 
        STR_TO_DATE(dt, '%Y-%m-%d %H:%i:%s') BETWEEN '2021-01-01' AND '2021-12-31'
    GROUP BY 
        quarter, type
) AS subquery
GROUP BY 
    period
ORDER BY 
    period ASC;

    