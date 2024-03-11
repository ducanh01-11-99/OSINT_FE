#alias git_commit='git add .; git commit -am "$1";git pull origin dev;'
function git_commit() {
    git add .
    git commit -am "$1"
    git pull origin dev;
}
function npmi() {
    npm i "$1"
}
function npmu() {
    npm uninstall "$1"
}
function npmi_legacy() {
    npm i "$1" --legacy-peer-deps
}
function npmu_legacy() {
    npm uninstall "$1" --legacy-peer-deps
}
alias build='rm -rf build;npm run build;'
alias build_dev='git pull origin dev;rm -rf;rm -rf build;npm run build;'
alias first_install='rm -rf node-modules;rm -rf package-lock.json; npm i;'
alias first_install_legacy='rm -rf node-modules;rm -rf package-lock.json; npm i --legacy-peer-deps;'
