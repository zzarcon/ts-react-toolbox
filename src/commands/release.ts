import { green } from "../utils";

export const release = () => {
  green('Creating new version tag 💥');
  green('Pushing tag ⛏');
  green('Publishing to the registry 📦');
  // npm version patch && git push --tags && git push && npm publish
}