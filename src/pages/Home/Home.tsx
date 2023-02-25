import { useContext } from "react";
import Tree from "../../components/Tree/Tree";
import { ContextStore } from "../../context/ContextProvider";
import "./Home.css"


export default function Home() {
    const { leavesKey } = useContext(ContextStore);
    const [leavesFallen] = leavesKey;

  return (
    <div className='Home'>
        <div className="left--container">
            {leavesFallen && <div className="welcome">
                <div>Hi I'm <span className="welcome--bold">MATT WOODS</span>,</div>
                <div className="welcome--line--two">I'm a Frontend Developer.</div>
            </div>}
        </div>
        <div className="tree--container">
            <Tree />
        </div>
        <div className="right--container">
            <div className="move--me">move the mouse</div>
            <div className="shake--me">to shake off the leaves...</div>
        </div>
    </div>
  )
}
