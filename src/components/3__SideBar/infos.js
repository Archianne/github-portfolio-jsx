import Icons from "../../theme/icons"
import Link from "../_Styled/link";

const InfosDiv = ({ value }) => {
  return (
    <div id="infos">
      <p>
        <Icons.Building className="icon" /> {value.company}
      </p>
      <p>
        <Icons.Mail className="icon" /> helena19w@gmail.com
      </p>
      <p>
        <Icons.Map className="icon" /> {value.location}
      </p>
      <p>
        <Icons.Link className="icon" />
        <a href={value.blog}>@archianne.jsx</a>
      </p>
      <p>
        <Icons.Linkedin className="icon" />
        <Link href="https://www.linkedin.com/in/helena-archer/">
          /in/helena-archer
        </Link>
      </p>
    </div>
  );
};

export default InfosDiv;
