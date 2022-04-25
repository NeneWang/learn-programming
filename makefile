
teach-c:
	git add --all
	git commit -m "master | before switch commit"
	git add --all
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