WITH MonthlyTransactions AS (
  SELECT
    a.iban,
    t.amount,
    t.dt
  FROM accounts a
  JOIN transactions t ON a.id = t.account_id
  WHERE MONTH(t.dt) = 9  -- September
    AND YEAR(t.dt) = YEAR(CURRENT_DATE())  -- Ensure it's the current year
)
SELECT 
  iban,
  GROUP_CONCAT(CONCAT('$', FORMAT(CAST(t.amount AS DECIMAL(10,2)), 2)) ORDER BY t.dt ASC SEPARATOR ' + ') AS transactions,
  CONCAT('$', FORMAT(SUM(CAST(t.amount AS DECIMAL(10,2))), 2)) AS total
FROM MonthlyTransactions t
GROUP BY iban
ORDER BY COUNT(t.amount) DESC, SUM(CAST(t.amount AS DECIMAL(10,2))) DESC;
