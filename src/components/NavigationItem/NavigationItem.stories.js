import NavItem from "./NavigationItem";
import HomeIcon from "@material-ui/icons/Home";

const Template = (args) => <NavItem {...args} />;

const Stories = {
  title: "NavItem",
  component: NavItem,
};
export default Stories;

export const Default = Template.bind({});
Default.args = {
  text: "Item text",
  icon: <HomeIcon size={24} />,
};
