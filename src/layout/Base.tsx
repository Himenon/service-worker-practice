import * as React from "react";
import { Outlet } from "react-router-dom";
import { useStartTransition } from "./transition";

const Base: React.FC = () => {
  const startTransition = useStartTransition();

  const links: { text: string; onClick: () => void }[] = [
    {
      text: "top",
      onClick: () => {
        startTransition("/");
      },
    },
    {
      text: "playground",
      onClick: () => {
        startTransition("/playground");
      },
    },
  ];

  return (
    <div>
      <nav>
        {links.map((link) => {
          return (
            <button key={link.text} onClick={link.onClick}>
              {link.text}
            </button>
          );
        })}
      </nav>
      <div>
        <React.Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </React.Suspense>
      </div>
    </div>
  );
};

Base.displayName = "BasicLayout";

export default Base;
