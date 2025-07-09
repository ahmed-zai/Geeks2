((userName) => {
    const navbar = document.getElementById('navbar');

    // Create container div
    const userDiv = document.createElement('div');
    userDiv.className = 'user-info';

    // Create username text
    const nameText = document.createElement('span');
    nameText.textContent = userName;

    // Create profile image
    const profileImg = document.createElement('img');
    profileImg.src = '#'; // placeholder image
    profileImg.alt = `${userName}'s profile picture`;

    // Append name and image to div
    userDiv.appendChild(nameText);
    userDiv.appendChild(profileImg);

    // Append user info to navbar
    navbar.appendChild(userDiv);
})('Ahmed');
