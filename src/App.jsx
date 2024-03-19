import { GlobalStyles } from "./GlobalStyles";
import AddComment from "./components/AddComment";
import Comment from "./components/Comments/Comment";

export default function App() {
  return (
    <div>
      <GlobalStyles />
      <Comment />
      <AddComment />
    </div>
  );
}
