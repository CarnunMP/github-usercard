/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

function getMyData() {
  axios.get("https://api.github.com/users/CarnunMP")
  .then(response => {
    // debugger
    const cards = document.querySelector(".cards");
    const myData = createCard(response.data);
    cards.appendChild(myData);
  })
  .catch(error => {
    debugger
  });
}

getMyData();

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function createCard(userObject) {  
  const [card, image, cardInfo, name] = ["div", "img", "div", "h3"].map(tag => {
    return document.createElement(tag);
  });
  card.setAttribute("class", "card");
  image.setAttribute("src", `${userObject.avatar_url}`);
  cardInfo.setAttribute("class", "card-info");
  name.setAttribute("class", "name");
  name.textContent = userObject.name;
  
  const pArray = [];
  for (let i = 0; i < 6; i++) {
    pArray.push(document.createElement("p"));
  }
  const [username, location, profile, followers, following, bio] = pArray;
  username.setAttribute("class", "username");
  username.textContent = userObject.login;
  location.textContent = userObject.location;
  profile.textContent = "Profile : ";
  const profileLink = document.createElement("a");
  profileLink.setAttribute("href", `https://github.com/${userObject.login}/${userObject.login}.github.io`);
  profileLink.textContent = `https://github.com/${userObject.login}/${userObject.login}.github.io`;
  profile.appendChild(profileLink);
  followers.textContent = `Followers: ${userObject.followers}`;
  following.textContent = `Following: ${userObject.following}`;
  bio.textContent = `Bio: ${userObject.bio}`;

  const cardChildren = [image, cardInfo];
  cardChildren.forEach(child => {
    card.appendChild(child);
  });

  const cardInfoChildren = [name, username, location, profile, followers, following, bio];
  cardInfoChildren.forEach(child => {
    cardInfo.appendChild(child);
  })

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
