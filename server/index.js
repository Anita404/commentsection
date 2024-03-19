import { createServer } from "http";
import pkg from "pg";
import url from "url";
const { Pool } = pkg;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "comments",
  password: "admin",
  port: 5432,
});

const getComments = async (req, res) => {
  const comments = await pool.query("SELECT * FROM comments");

  const result = comments.rows.map(comment => {
    const replies = comment.replies.map(id => )
  })

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: comments.rows,
    })
  );
};

const getUsers = async (req, res) => {
  const user = await pool.query(`SELECT * FROM "user"`);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: user.rows,
    })
  );
};

const server = createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Max-Age", 2592000); // 30 days
  res.setHeader("Access-Control-Allow-Headers", "content-type");

  switch (path) {
    case "/":
      break;
    case "/comments":
      getComments(req, res);
      break;
    case "/user":
      getUsers(req, res);
      break;
    default:
      break;
  }
});

server.listen(8080, () => console.log("I'M RUNNING"));
