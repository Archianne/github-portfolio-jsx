const UsernameDiv = ({value}) => {
    return (
        <div id="username">
        <img src={value.avatar_url} alt="" />
        <div>
          <h1>{value.name}</h1>
          <h3>{value.login}</h3>
        </div>
      </div>
     );
}
 
export default UsernameDiv;