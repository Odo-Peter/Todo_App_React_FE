import day from '../../img/day.png';
import night from '../../img/night.png';

const Image = () => {
  const date = new Date().toLocaleTimeString().split(' ');

  // console.log(date.includes('AM'));
  if (date.includes('AM')) {
    return (
      <div className="img-div">
        <img src={day} alt="day" />
      </div>
    );
  } else if (date.includes('PM')) {
    return (
      <div className="img-div">
        <img src={night} alt="day" />
      </div>
    );
  }
};

export default Image;
