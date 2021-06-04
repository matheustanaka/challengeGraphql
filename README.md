# Challenge Graphql

CRUD using graphql, apollo server and mongodb.

## Getting Started

---

    # MongoDB
    - You have to create a database or just use your database in Docker (only MongoDB).

    # install dependencies
    $ yarn install

    # start project
    $ yarn dev

    # see graphql interface on localhost link
    http://localhost:4001/graphql

## Queries

---

- Create User

        mutation {
            createUser(data: {
                firstName: "Matheus",
                lastName: "Tanaka",
                email: " matheus@gmail.com"
                active: true
            }) {
                _id
                firstName
                lastName
                email
            }
        }

- Query User

        query {
            users {
                _id
                firstName
                lastName
                fullName
                email
                active
            }
        }

- Delete User

        mutation{
            deleteUser(id: "60b9753dcf587036e0008644")
        }

- Update User

        mutation {
            updateUser (id: "60b9753dcf587036e0008644", data: {
                firstName: "Matheus3333",
                lastName: "Tanaka",
                email: "matheus@gmail.com"
                active: true
            }) {
                _id
                firstName
                lastName
                email
            }
        }

* Create Post

        mutation {
            createPost(data:{
                title: "Testing 2 other poster",
                content: "testing",
                author: "60b9753dcf587036e0008644"
            }) {
                _id
                title
                content
                author{
                fullName
                _id
                }
            }
        }

* Query Post

        query {
            posts {
                _id
                title
                content
                author {
                fullName
                }
            }
        }

* Delete Post

        mutation {
            deletePost(id: "60b97f8694a07035382d075d")
        }

* Update Post

        mutation {
            updatePost(id: "60b97ff238ad2b1444c36f97", data:{
                title: "Updating my second post",
                content: "testing",
                author: "60b9753dcf587036e0008644"
            }) {
                _id
                title
                content
                author{
                _id
                fullName
                }
            }
        }
