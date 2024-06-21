// express 모듈 불러오기
const express = require("express");
// express 사용
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
    {id:1, name:"user1"},
    {id:2, name:"user2"},
    {id:3, name:"user3"},
];

/**
* @Name : get("/")
* @description : GET response print 테스트
* @path : {GET} http://localhost:3000/
*
* @params1 req : 요청
* @params2 res : 응답
*
* @return : res.send("메세지 전달")
*/
app.get("/", (req, res) => {
    res.send("hello world DEV")
})

/**
* @Name : get("/api/users")
* @description : GET response json 테스트
* @path : {GET} http://localhost:3000/api/users
*
* @params1 req : 요청
* @params2 res : 응답
*
* @return : res.json(ok, user)
*/
app.get("/api/users", (req, res) => {
    res.json({ok:true, user:users});
})


/**
* @Name : get("/api/users/user")
* @description : GET (Query) 요청 데이터로 필터링 후 반환
* @path : {GET} http://localhost:3000/api/users/user
*
* @params1 req : 요청
* @params2 res : 응답
*
* @return : res.json(ok, user)
*/
app.get("/api/users/user", (req, res) => { 

    const user_id = req.query.user_id;
    // filter: 배열함수, 필터링한 데이터를 새로운 배열로 반환
    const user = users.filter(data => data.id == user_id);

    res.json({ok:true, user:user});
})

/**
* @Name : get("/api/users/userBody")
* @description : POST (body) 요청 데이터로 필터링 후 반환
* @path : {GET} http://localhost:3000/api/users/userBody
*
* @params1 req : 요청
* @params2 res : 응답
*
* @return : res.json(ok, user)
*/
app.post("/api/users/userBody", (req,res) => {

    const user_id = req.body.user_id;
    const user = users.filter(data => data.id == user_id);

    res.json({ok:false, user: user});

})

/**
* @Name : get("/api/users/:user_id")
* @description : GET (param) 요청 데이터로 필터링 후 반환
* @path : {GET} http://localhost:3000/api/users/:user_id
*
* @params1 req : 요청
* @params2 res : 응답
*
* @return : res.json(ok, user)
*/
app.get("/api/users/:user_id", (req,res) => {

    const user_id = req.params.user_id;
    
    const user = users.filter(data => data.id == user_id);

    res.json({ok: true, user: user})
})


/**
* @Name : get("/api/users/add")
* @description : POST (body) 요청 데이터를 users에 추가 
* @path : {GET} http://localhost:3000/api/users/add
*
* @params1 req : 요청
* @params2 res : 응답
*
* @return : res.json(ok, user)
*/
app.post("/api/users/add", (req,res) =>{

    const {id, name} = req.body;
    const user =users.concat({id, name});

    res.json({ok: true, user: user})
})






/**
* @Name : listen()
* @description : http listen port 생성 서버 실행
* @params1 req : 요청
* @params2 res : 응답
* @return : res.send("메세지 전달")
*/
app.listen(3000, () => {
    console.log("server listening on port 3000")
})
