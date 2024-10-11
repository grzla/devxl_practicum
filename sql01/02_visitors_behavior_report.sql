select count(*) as purchases from events 
where type = 'buy'
and dt >= '2022-05-01'
and dt <= '2022-06-01'
;
