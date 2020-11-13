function laterResolve(delay, value) {
  return new Promise((resolve) => setTimeout(resolve, delay, value));
}

function laterReject(delay, value) {
  return new Promise((reject) => setTimeout(reject, delay, value));
}

export { laterReject, laterResolve };
