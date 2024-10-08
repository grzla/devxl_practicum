WITH event_data AS (
    SELECT
        QUARTER(dt) AS quarter,
        type,
        COUNT(*) AS event_count
    FROM
        events
    WHERE
        YEAR(dt) = 2021
    GROUP BY
        quarter, type
)
SELECT
    CONCAT('Q', quarter, "'21") AS period,
    GROUP_CONCAT(CONCAT(type, '=', event_count) ORDER BY event_count DESC, type ASC SEPARATOR '; ') AS events
FROM
    event_data
GROUP BY
    period
ORDER BY
    period ASC;