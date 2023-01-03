const data = [
  {
    when: "2022-11-11",
    name: "I can not create a MVC project",
    status: "Not started",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut vitae maiores voluptatum facere officiis eveniet quam quasi, error, necessitatibus in ratione nesciunt, modi pariatur quaerat impedit consectetur aliquam obcaecati!",
  },
  {
    when: "2022-10-01",
    name: "I can not open Visual Studio Code",
    status: "In progress",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut vitae maiores voluptatum facere officiis eveniet quam quasi, error, necessitatibus in ratione nesciunt, modi pariatur quaerat impedit consectetur aliquam obcaecati!",
  },
  {
    when: "2022-12-20",
    name: "I do not see my code",
    status: "Idk",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut vitae maiores voluptatum facere officiis eveniet quam quasi, error, necessitatibus in ratione nesciunt, modi pariatur quaerat impedit consectetur aliquam obcaecati!",
  },
  {
    when: "2022-11-20",
    name: "Something",
    status: "Idk",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut vitae maiores voluptatum facere officiis eveniet quam quasi, error, necessitatibus in ratione nesciunt, modi pariatur quaerat impedit consectetur aliquam obcaecati!",
  },
];

const statuses = [
  {
    key : 'idk',
    value : 'Idk'
  },
  {
    key : 'in_progress',
    value : 'In progress'
  },
  {
    key : 'not_started',
    value : 'Not started'
  },
  {
    key : 'done',
    value : 'Done'
  }
];

const http = require("http");
var url = require('url');

http
  .createServer(function (req, res) {
    const { query, pathname } = url.parse(req.url, true);

    let answer = data;

    if(pathname == '/add'){
      answer = data;
        const task = {
            name : query.name,
            description : query.description,
            status : "Not started",
            when : (new Date()).toISOString().slice(0, 10)
        };

        answer.push(task);
    }

    if(pathname == '/statuses'){
      answer = statuses;
    }

    res.writeHead(200, { 
        "Content-Type": "text/html", 
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With"
    });
    res.end(JSON.stringify(answer));
  })
  .listen(8080);

console.log('Server is working now');

//TODO: add messenger package(integration)