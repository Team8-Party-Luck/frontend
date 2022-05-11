// var sock = new SockJS('http://localhost:8080/chat')
// let client = Stomp.over(sock);

// useEffect(() => {
//   client.connect({}, () =>{
//       console.log('Connected : ' + auth.user.id)
//       client.send("/app/join", {},JSON.stringify(auth.user.id))

// Create Message

//       client.send(`/app/chat/${(메세지받을대상)user.id}`,{},JSON.stringify(res.data))

//       client.subscribe('/queue/addChatToClient/'+auth.user.id, function(messageDTO){
//           const messagedto = JSON.parse(messageDTO.body)
//       })

//   })
//   return () => client.disconnect();

// }, [client, auth.user.id, dispatch])

// connect() {
//   this.socket = new SockJS('http://localhost:8080/ws');
//   let options = {debug: false, protocols: Stomp.VERSIONS.supportedProtocols()};
//   this.stompClient = Stomp.over(this.socket, options);
//   console.log(`소켓 연결을 시도합니다.`);

// // 이렇게 별도의 헤더를 생성한 뒤
//   let headers = {Authorization: sessionStorage.getItem('access_token')};

// // STOMP Client의 header 부분에 집어넣어줍니다.
//   this.stompClient.connect(headers, (frame) => {
//     this.connected = true
//     console.log('소켓 연결 성공', frame);
//     this.stompClient.subscribe('/exchange/chat-exchange/msg.' + this.chatRequestDto.roomId, (tick) => {
//       console.log(tick.body);
//       this.chatLogs.push(JSON.parse(tick.body));
//     })
//   }, (error) => {
//     console.log('연결실패');
//     console.log(error)
//     this.connected = false
//   })

// }
