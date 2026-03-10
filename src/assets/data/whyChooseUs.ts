
import { AiOutlineSignature } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa6";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

interface WhyChooseUsItem {
  id: number;
  title: string;
  icon : any;
  description: string;
}


export const whyChooseUs: WhyChooseUsItem[] = [
    {
      id: 1,
      title: "Creativity & Innovation",
      icon : AiOutlineSignature,
      description:
        "At Shilp, we believe in inventing, creating new ideas, methods and patterns. We embrace newness. Creativity for us lies in dynamism and innovation is all about focused implementation of our ideas. We manage them beautifully to give best results to end users. Look ahead and think big - our most reliable game changers.",
    },
    {
      id: 2,
      title: "Teamwork",
      icon : AiOutlineTeam,
      description:
        "The people at Shilp might join for reason but they stay here by their choice. The nurturing culture of the company has led to creating an exceedingly strong bond among the team members. We are a bunch of independent, self-motivated problem solvers who empathise with each other for success. We are authentic on our actions and true to each other.",
    },
    {
      id: 3,
      title: "Trust",
      icon : FaRegHandshake,
      description:
        "We believe trust is the cornerstone of everything we do. Transparency is ingrained in our culture, building credibility and fostering positive relationships. We strive to earn and strengthen trust at every step, understanding its lasting value. The trust we’ve cultivated over the years inspires us to innovate and deliver exceptional results for our clients every day.",
    },
    {
      id: 4,
      title: "Customer Centricity",
      icon : MdOutlineConnectWithoutContact,
      description:
        "We exist to help our buyers get the best. Every decision we take, every move we make revolves around the value that we bring to our end users. When it comes to our customers we don’t settle for the ordinary. We put in the most conscientious efforts to produce exemplary results.",
    },
  ];