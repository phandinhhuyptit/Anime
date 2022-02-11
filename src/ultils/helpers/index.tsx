import React, { lazy, Suspense } from "react";
import ProgressBar from "react-topbar-progress-indicator";

ProgressBar.config({
  barColors: {
    "0": "#ff0000",
  },
});

type ImportFunc = () => Promise<{
  default: React.ComponentType<any>;
}>;

const lazyLoading = (importFunc: ImportFunc) => {
  const LazyComponent = lazy(importFunc);
  console.log("typeof LazyComponent", typeof LazyComponent);
  return (props: React.ComponentProps<typeof LazyComponent>) => (
    <Suspense fallback={<ProgressBar />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

const isObjectEmpty = (obj: object): boolean => JSON.stringify(obj) === "{}";

// check if object one contains all property and value of object two.
const compareTwoObject = <T, U extends keyof T>(obj1: T, obj2: T): boolean => {
  let isComparedCount = 0;

  const entries = Object.entries(obj2);

  for (const [key, value] of entries) {
    if (obj1[key as U] === value) {
      isComparedCount++;
    }
  }

  return isComparedCount === entries.length;
};

export { lazyLoading, isObjectEmpty, compareTwoObject };
