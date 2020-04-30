# smartBrainApp

## How to Install
* Install PostgresSQL
* Clone This Repo
* Run both frontend and backend
* Create Users and login Scheme
		  
```
CREATE TABLE USERS (id serial PRIMARY KEY, name VARCHAR(100) , email text unique NOT NULL, entries BIGINT DEFAULT 0, joined TIMESTAMP NOT NULL);  
CREATE TABLE login (id serial PRIMARY KEY, email text unique NOT NULL, hash varchar(100) NOT NULL);
```

#### AnyBody can copy edit and reuse this code
