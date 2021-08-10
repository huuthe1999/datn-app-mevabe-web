// libs
import React, { useCallback, useEffect, useState } from "react";
// others
import { childContext } from "@/contexts";
import { useAuth } from "@/hooks";
import { useDispatch } from "react-redux";
import { getAllChildren } from "@/actions/Common";

const getFirstName = (name = "") => {
  const splitedName = name.split(" ");
  return splitedName[splitedName.length - 1] || "";
};

const ChildProvider = ({ children: content }) => {
  const { user } = useAuth();
  const [currentChild, setStateCurrentChild] = useState();
  const [children, setChildren] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [shouldRefresh, setShouldRefresh] = useState(0);
  const [triggerSelectFlag, setTriggerSelectFlag] = useState(0);

  const setCurrentChild = useCallback((childId) => {
    setStateCurrentChild(childId);
    localStorage.setItem("currentChild", childId);
  }, []);

  const refreshChildren = useCallback(
    () => setShouldRefresh(new Date().getTime()),
    []
  );

  useEffect(() => {
    if (user && user?._id) {
      setIsLoading(true);

      dispatch(
        getAllChildren({
          cbSuccess: ({ children = [] }) => {
            const childrenObject = children.reduce(
              (previous, child) => ({
                ...previous,
                [child._id]: {
                  ...child,
                  displayFullName:
                    child.name + (child.nickname ? ` (${child.nickname})` : ""),
                  displayShortName: child.name.substr(
                    child.name
                      .substr(0, child.name.lastIndexOf(" "))
                      .lastIndexOf(" ") + 1
                  ),
                  displayFirstName: getFirstName(child.name)[0].toUpperCase(),
                },
              }),
              {}
            );
            setChildren(childrenObject);

            if (children.length) {
              const defaultCurrentChild = localStorage.getItem("currentChild");
              if (defaultCurrentChild && childrenObject[defaultCurrentChild]) {
                setStateCurrentChild(defaultCurrentChild);
              } else {
                setStateCurrentChild(children[0]?._id);
              }
            } else {
              setStateCurrentChild("");
            }

            setTimeout(() => setIsLoading(false), 200);
          },
          cbError: () => setIsLoading(false),
        })
      );
    } else {
      setIsLoading(false);
      setChildren({});
      setStateCurrentChild();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, user, shouldRefresh]);

  return (
    <childContext.Provider
      value={{
        children,
        currentChild,
        isLoading,
        setCurrentChild,
        refreshChildren,
        triggerSelectFlag,
        setTriggerSelectFlag,
      }}
    >
      {content}
    </childContext.Provider>
  );
};

export default ChildProvider;
