# Schema Information

:articles table
t.string title, null: false
t.text body, null: false
t.integer author_id, null: false

t.timestamps

add_index :artlcles, :title, unique: true

:users table
t.string username, null: false
t.string password_digest, null: false
t.string session, null: false

t.timestamps

add_index :users, :username, unique: true

:articles_by_author join table
t.integer :user_id, null: false
t.integer :article_id, null: false

t.timestamps

add_index :articles_by_author, :user_id, null: false
add_index :articles_by_author, :article_id, null: false


## articles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

## articles_by_author
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
