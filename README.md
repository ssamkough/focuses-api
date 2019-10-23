# Focuses API

API for Focuses app. Relatively simple and small.

## Getting Started :memo:

### Prerequisites :clipboard:

You should have installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/download/)

### Installation :barber:

Clone the repository and install npm packages:

```
npm install
```

### Configuration :hammer_and_wrench:

In `/server/config/config.json`, make sure your username and password match whichever user and their credentials are.

Create a database (available if you have installed PostgreSQL):

```
createdb todos-dev
```

You can also create one by going into the psql console and writing a query, or going onto pgAdmin and creating one from there.

Run migrations to the database:

```
sequelize db:migrate
```

### Demo :rocket:

Run the app:

```
npm run dev
```

It should be running on localhost:8000. Open up localhost:8000 on your browser.

After, open up Postman (or curl) and create a POST method with this request URL localhost:8000/api/todos and the following JSON:

```
{
  "title": "first item"
}
```

## Acknowledgements :raised_hands:

- [Scotch - Getting Started with Node, Express and Postgres Using Sequelize](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize)
