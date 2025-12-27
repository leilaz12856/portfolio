export type Project = {
  id: string;
  link: string;
  title: string;
  description: string;
  tags: string[];
  // optional detailed fields for project page
  intro?: string;
  meta?: {
    role?: string;
    year?: string;
    tools?: string[];
  };
  contentSections?: { heading: string; body: string }[];
  images?: string[];
  logo?: string;
};

export const projects: Project[] = [
  {
    id: "seb",
    link: "/seb",
    title: "SEB",
    description: "Projects I have worked on during my internship at SEB",
    tags: ["UI/UX", "Research"],
    intro:
      "Kort intro till caset – vad det är för typ av tjänst eller produkt och vilken roll du hade.",
    meta: { role: "UX / UI", year: "2024", tools: ["Figma", "HTML/CSS"] },
    contentSections: [
      { heading: "Overview", body: "Short overview text for SEB project." },
      { heading: "Resultat", body: "Result summary for SEB project." },
    ],
    images: [],
    logo: "/seb-logo.png",
  },
  {
    id: "folksam",
    link: "/folksam",
    title: "FOLKSAM",
    description: "School project in collaboration with Folksam.",
    tags: ["Research"],
    intro:
      "Kort intro till caset – vad det är för typ av tjänst eller produkt och vilken roll du hade.",
    meta: { role: "UX / UI", year: "2025", tools: ["Figma", "HTML/CSS"] },
    contentSections: [
      {
        heading: "Overview",
        body: "Folksam wanted to improve and increase the use of self-service by gaining a better understanding of when insurance customers prefer to use self-service and when they prefer personal service. For Folksam, self-service means value-creating activities that a customer performs on their own, without needing to contact a customer service agent.",
      },
      {
        heading: "Goal",
        body: "How can we create a balance between self-service and personal service to meet insurance customers' needs? What factors influence customers' choice between these options?",
      },
      {
        heading: "Process",
        body: "We started the project with an environmental analysis, conducted interviews and surveys, created segmentations and personas, and ran workshops to generate insights and solution hypotheses.",
      },
      {
        heading: "Resultat",
        body: "Suggested implementing a feedback form for customers switching from digital to personal service and organizing virtual customer service events to reduce repetitive inquiries.",
      },
    ],
    images: [],
    logo: "/folksam-logo.png",
  },
  {
    id: "zington",
    link: "/zington",
    title: "ZINGTON",
    description: "School project in collaboration with Zington.",
    tags: ["UX Design"],
    intro:
      "A project by Zington (SXC) where we worked towards the goal of increasing interest in the conference and creating an app as a complement.",
    meta: {
      role: "UX / UI Designer (As a student at Nackademin)",
      year: "2024",
      tools: ["Figma"],
    },
    contentSections: [
      {
        heading: "Overview",
        body: "Zington is a company that specializes in digital operations, UX, and design, and is best known for organizing the STHLM Xperience Conference (SXC). I contributed by improving their conference app to increase participation, enabling smooth engagement both on-site and online. This enhances accessibility, networking, and real-time interaction for broader participation at future events.",
      },
      {
        heading: "Goal",
        body: "Develop a customer journey, personas, and a prototype for how a good participant experience could look, where the app is a complement to the physical and digital conference.",
      },
      {
        heading: "Process",
        body: "We carried out the design thinking process: we started by looking at the growth opportunity and focused on increasing online participation. We conducted participant and expert interviews and a survey, then created personas, a user journey, and a point of view to identify user needs and possible solutions.",
      },
      {
        heading: "Insights and Results",
        body: '"It is imperative to make the users feel like a part of the process rather than an onlooker while the hosts focus on the people that are physically present at the conference." We added a schedule for online participants, created a small community for networking, and suggested live-interaction features (chat, Q&A, voting) so online attendees feel like real participants.',
      },
    ],
    images: [],
    logo: "/zington-logo.png",
  },
  {
    id: "moderna",
    link: "/moderna",
    title: "MODERNA MUSEET",
    description: "School project focusing on the Moderna Museet.",
    tags: ["UX/UI", "Research"],
    intro:
      "A project in collaboration with the Moderna Museet where the goal was to improve the website, increase accessibility (WCAG), and boost ticket sales.",
    meta: {
      role: "UX/UI Designer",
      year: "2024",
      tools: ["Research", "Figma"],
    },
    contentSections: [
      {
        heading: "Overview",
        body: "How can we attract more visitors to the Moderna Museet? The users are all visitors, but we focused a little extra on accessibility.",
      },
      {
        heading: "Goal",
        body: "The user should receive clear information regarding the booking date, price, and closed days. Develop accessibility to create a user-friendly website that everyone can use. Engaging content in the form of art and design should inspire visitors. Make it easy to find and book tickets on your own.",
      },
      {
        heading: "Process",
        body: "We used the think-aloud method, observed screen behaviors, guerilla testing, A/B testing and conducted interviews.",
      },
      {
        heading: "Insights and Results",
        body: "- The choice of red color in the calendar is confusing and gives the impression that it is fully booked. - Users like the visuals; they think it has a sleek and stylish design. - The purchasing process is considered easy to understand; 3 out of 4 people think that the shopping cart is clear and easy to comprehend. - The homepage doesn't feel inspiring and lacks information about each artist and exhibition. Improvements: add an English option, add short texts under exhibitions to capture interest, remove misleading red from the calendar, add an accessibility icon under the shopping cart, and avoid small text overlays on images.",
      },
    ],
    images: [],
    logo: "/moderna-museet-logo.png",
  },
];

export default projects;
