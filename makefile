

PAGE=https://learn.wangnelson.xyz/
FTP_HOST=wangnelson.xyz
FTP_USER=learn@wangnelson.xyz
FTP_PASSWORD=Learncode2020!


# Requrements: git-ftp, yarn, node

main: build-commit ft-push

pres-c:
	git pull
	git add --all
	git commit -m "master | before switch switch to presentation"
	git push origin HEAD
	make pres-m

pres-m:
	git pull
	git checkout pres
	git merge master
	git add --all
	git commit -m "Instructor merge"
	git push origin HEAD

teach-c:
	git add --all
	git commit -m "master | before switch commit"
	git push origin HEAD
	make teach-m

teach-m:
	git checkout instructor-branch
	git merge master
	git add --all
	git commit -m "Instructor merge"
	git push origin HEAD

master:
	git add --all
	git commit -m "Instructor merge"
	git push origin HEAD
	git checkout master


build-commit:
	npx docusaurus build
	git add --all
	git commit -m "Production update | ${v}"	
	git push origin HEAD

build-commit-donpush:
	yarn install
	yarn build
	git add --all
	git commit -m "Production update | ${v}"


merge-to-deployment:
	git checkout deployment
	git pull
	git merge master
	git push origin HEAD
	git checkout master


ft-push:
	git ftp push 
	echo "open in https://smooth.l0l.in" && git log -n 2
	
ft-configpush:
	git config git-ftp.url ftp://ftp.${FTP_HOST}
	git config git-ftp.user ${FTP_USER}
	git config git-ftp.password ${FTP_PASSWORD}
	git config git-ftp.syncroot build/
	git ftp push --force

ftpinit:
	git config git-ftp.url ftp://ftp.${FTP_HOST}
	git config git-ftp.user ${FTP_USER}
	git config git-ftp.password ${FTP_PASSWORD}
	git config git-ftp.syncroot build/
	git ftp init --force

first-deploy:
	make ftpinit
	git ftp push

cap:
	git add --all
	git commit -m "${m}"
	git push origin HEAD
	git log -n 2