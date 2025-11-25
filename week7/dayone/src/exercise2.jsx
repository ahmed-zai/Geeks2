
import UserFavoriteAnimals  from "./userFavoriteAnimals";

const Exercise2 = ({ispress}) => {
     const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"]
};
   return (
    <>
      <h3>first name: {user.firstName}</h3>
      <h3>last name: {user.lastName}</h3>
      <div className="border shadow-2xl p-4 m-4 flex justify-center  palace-items-center  ">
      {/* pass the favorite animals arrray */}
      <h6>Faviroate animal </h6>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
      </div>
    </>
   )

}
export default Exercise2;