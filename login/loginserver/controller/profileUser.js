const profile = {
    user: {
        name: "Muhammad Hafizi",
        password: "password",
        occupation: "Software developer"
    }
}

exports.getUserProfile = (req, res) => {
    const imageLogo = `${req.protocol}://${req.get("host")}/assets/hafizilogo.webp`; 
    const imageProfile = `${req.protocol}://${req.get("host")}/assets/jinx.jpg`; 
    
    res.json({ ...profile, user: { ...profile.user, imageLogo, imageProfile } });
};