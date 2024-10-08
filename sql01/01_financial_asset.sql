SELECT 
    c.name,
    p.asset_name,
    p.asset_type,
    ROUND(((ar.total_returns - p.initial_investment - p.additional_investments) / p.initial_investment) * 100, 2) AS annual_roi
FROM 
    clients c
JOIN 
    portfolios p ON c.id = p.client_id
JOIN 
    asset_returns ar ON p.id = ar.portfolio_id
WHERE 
    ((ar.total_returns - p.initial_investment - p.additional_investments) / p.initial_investment) * 100 > 5
ORDER BY 
    c.name ASC, 
    p.asset_name ASC;
