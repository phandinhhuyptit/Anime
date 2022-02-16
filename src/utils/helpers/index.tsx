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

const numberWithCommas = (x: string | number | undefined) => {
  if (!x && x !== 0) return "";

  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const chunk = <T extends {}>(arr: Array<T>, chunkSize: number) => {
  let R = [];

  for (var i = 0; i < arr.length; i += chunkSize) R.push(arr.slice(i, i + chunkSize));

  return R;
};

export { lazyLoading, isObjectEmpty, compareTwoObject, numberWithCommas, chunk };
