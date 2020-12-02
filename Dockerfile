FROM pedrazadumer/axpc-react-base:latest

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./