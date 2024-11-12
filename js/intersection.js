// define observer options
const options = {
  root: null,
  rootMargin: "-2px",
  threshold: 1.0,
};

// configure intersection observer to track scroll progress throughout document
const observer = new IntersectionObserver(handleObserverIntersection, options);

// observe each header tag in document with intersection observer
headerTags.forEach( (headerTag) => {      
  observer.observe(headerTag)
})