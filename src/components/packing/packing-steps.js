const packingSteps = [
	{
		primaryStep: 'Lay Out',
		subSteps: [
			{
				text: 'Check gear, lock brakes (Line, Ring, Toggle), and weigh down container',
				image: '01-brake-stow.jpeg',
			},
			{ text: 'Run lines to check for continuity', image: '02-layout.jpeg' },
			{ text: 'Shake out and quarter the canopy', image: '03-ots.jpeg' },
		],
	},
	{
		primaryStep: 'Over-the-Shoulder Flaking',
		subSteps: [
			{ text: 'Hang canopy over the shoulders, keeping sides separate', image: '' },
			{ text: 'Pinch the nose of all seven cells between your knees', image: '' },
			{
				text: 'Pick a side, lift all B and other lines away from the A-Lines enough to push the fabric between the A’s andB’s to the outside',
				image: '04-ots-flake.jpeg',
			},
			{ text: 'Do the same between the B’s and Cs, then between the C’s and D’s', image: '' },
			{ text: 'Repeat with the other side of the canopy', image: '' },
			{ text: 'Release nose pinch and prep nose for laydown', image: '05-laydown.jpeg' },
			{
				text: 'Keeping tension on all lines, lay canopy nose-down as cleanly as possible without disturbing the folds just created',
				image: '',
			},
			{ text: 'Clear the Pilot Chute and Bridle if buried underneath the canopy', image: '' },
			{
				text: 'Draw Tail Pocket down to approximately the brake-line attachment points',
				image: '',
			},
		],
	},
	{
		primaryStep: 'Top Flaking',
		subSteps: [
			{
				text: 'Pick a side, and clear room to work by moving the tail and all brake lines to the opposite side of the canopy',
				image: '',
			},
			{ text: 'Position yourself at the top of the canopy', image: '' },
			{
				text: 'Identify and gently tension all three D-Tabs on the side you are working on. (Keep in mind, with the brakes already set, the D-Tabs will not align perfectly, and too much tension will only pull on the brake lines. All other tabs may be tensioned more firmly.)',
				image: '06-top-flaking.jpeg',
			},
			{
				text: 'Identify the three seams along the top skin between the D-Tabs and C-Tabs. Flip this primary flake onto the opposite side of the canopy. (As much as possible, maintain tension on the lines, all the way from the risers to the packing tabs, along the centerline of the packjob.)',
				image: '',
			},
			{
				text: 'With tension on all three C-Tabs, do the same with the flake between the C-Tabs and B-Tabs, then with the flake between the B-Tabs and the Imaginary A-Tabs.',
				image: '',
			},
			{
				text: 'Identify and align all three nose cells, (the center-cell nose can remain tucked underneath the packjob), and lay pointed outward, with tension on the Imaginary A-Tabs along centerline of packjob.',
				image: '',
			},
			{
				text: 'Return each of the three primary flakes to the correct side, tensioning at the packing tabs and keeping lines stacked. (Flapping individual flakes can help remove unwanted tucks in the fabric.)',
				image: '',
			},
		],
	},
	{
		primaryStep: 'Cleanup Inside (Top-Down)',
		subSteps: [
			{
				text: 'Holding at the line attachment points, lift all four D-Lines with one hand only enough to reach the other hand inside and push the fabric between the D’s and C’s away from the packjob centerline',
				image: '07-cleanup-inside.jpeg',
			},
			{
				text: 'Repeat with the fold between the C’s and B’s, and the fold between the B’s and A’s.',
				image: '',
			},
		],
	},
	{
		primaryStep: 'Cleanup Outside (Bottom-Up)',
		subSteps: [
			{
				text: 'Grab all four A’s at the attachment points, and slide your grip as high as you can along this fold of the center cell. This is meant to return tension to the A-Lines. From this point forward, ensure that tension is maintained on all lines.',
				image: '',
			},
			{
				text: 'Identify all four B’s at their attachment points, run a grip all the way up to the B-Crotch, stacking the B-Lines directly on top of the A-Lines. Before letting go of this grip, slide your other hand in from the outside of the canopy, underneath the top two primary flakes. When your hands meet, use your outer hand to maintain tension on the B’s. Use your forearms to smooth out fabric between the primary flakes.',
				image: '',
			},
			{
				text: 'Repeat the last step with the C-Lines, this time cleaning up the outside underneath only the topmost primary flake.',
				image: '',
			},
			{
				text: 'Repeat with the D-Lines, holding tension at the attachment points instead of searching for a D Crotch deep inside the canopy. Smooth out the visible top of the primary flakes.',
				image: '',
			},
			{
				text: 'Ensure that the entire top seam of the center-cell is pulled upward and not stuffed to a side. Tension the Bridle, as it was likely pulled downward during the flaking process.',
				image: '',
			},
		],
	},
	{
		primaryStep: 'Tail Folds',
		subSteps: [
			{
				text: 'Keeping tension at the D-Line attachment points, lay out the triangular corner of the stabilizer, such that the outermost brake-line stacks on top of all the A-D lines.',
				image: '',
			},
			{
				text: 'Fold the half-cell of the tail to the outside, so that the next brake-line stacks on top of the last.',
				image: '08-tail-folds.jpeg',
			},
			{
				text: 'Repeat these folds until you reach the Tail-Pocket. Tail folds will always be the same width, whether or not there is a brake line attached at the half-cell. (Some canopies have four brake-line attachment points, some models have five.) Keep the tail seam even for all folds.',
				image: '',
			},
		],
	},
	{ primaryStep: 'Repeat steps 3 through 6 with the other side of the canopy', subSteps: [] },
	{
		primaryStep: 'Tail-Gate',
		subSteps: [
			{ text: 'Lift Tail-Pocket high enough to see the D-Line attachment points', image: '' },
			{
				text: 'Make sure all eight D attachment points are together, in the center, tension upward.',
				image: '',
			},
			{
				text: 'Ensure that all other line group attachment points are also together, maintaining tension on all lines',
				image: '',
			},
			{ text: 'Center all brake lines, stacked on top of the rest', image: '' },
			{
				text: 'Identify all Tail-Gate lines, (this can be done easily by gently following them all the way up from the risers), and set your Tail-Gate.',
				image: '09-tailgate.jpeg',
			},
			{
				text: 'Draw Tail-Pocket down, even with the bottom of the canopy, being careful not to disturb tail folds',
				image: '',
			},
		],
	},
	{
		primaryStep: 'Reduction Folds',
		subSteps: [
			{
				text: 'Keep in mind that the reduction folds must result in a packjob narrow enough to fit into the container. Use the Tail-Pocket width for reference as you make these folds.',
				image: '',
			},
			{
				text: 'With knees on the bottom corners of the Tail-Pocket, fold each side of the tail-folds downward and inward. On each side, include all tail flakes and the stabilizer triangle in a single fold.',
				image: '',
			},
			{
				text: 'In a single fold on each side, wrap the three primary flakes upward and inward, on top of the tail folds. (These folds may overlap slightly, or you may wish to add a fold so they meet in the middle',
				image: '',
			},
			{
				text: 'Weigh down, or clamp the completed reduction folds',
				image: '10-reduction-folds.jpeg',
			},
			{
				text: '(You may find it easier to perform the reduction folds first on one side, then the other.)',
				image: '',
			},
			{
				text: 'Nose tips will be visible on each side. Stuff these underneath the packjob. They will be cleaned up later.',
				image: '',
			},
		],
	},
	{
		primaryStep: 'Stow Lines',
		subSteps: [
			{
				text: 'Open up bottom corners of the reduction folds just enough to reveal and open the Tail-Pocket.',
				image: '',
			},
			{
				text: 'Remove weight from container. (This is a good opportunity to double check 3-Rings and brake stows.)',
				image: '',
			},
			{
				text: 'At the bottom of the Tail-Pocket, create primary stow, (approximately fist-width), wrap with Tail-Pocket rubber band, and hide away in its special pocket.',
				image: '11-primary-stow.jpeg',
			},
			{
				text: 'Sit on top of packjob, facing container. Maintain even tension on all lines throughout the following steps.',
				image: '',
			},
			{
				text: 'Draw lines up to the top of the Tail-Pocket then off to one side.',
				image: '12-stow-lines-start.jpeg',
			},
			{
				text: 'Figure-eight all of the lines into the Tail-Pocket until there is approximately one shaka length of excess between the Tail-Pocket opening and the risers. (Each figure-eight must be the same size or smaller than the last, never larger.)',
				image: '13-stowed-lines.jpeg',
			},
			{
				text: 'Close down the Tail-Pocket, making absolutely certain no lines are caught in the Velcro.',
				image: '',
			},
		],
	},
	{
		primaryStep: 'Close Canopy in Container',
		subSteps: [
			{
				text: 'Prep the container for reception, with a foot or knee on the risers to ensure packjob remains undisturbed and no lines get pulled',
				image: '',
			},
			{
				text: 'Securing bottom of the canopy and all lines in one grip, lift the canopy and slide container underneath until the bottom of the canopy meets the bottom of the container tray, keeping even tension on the risers throughout.',
				image: '',
			},
			{
				text: 'Ensure that the risers are laying flat against the back of the container with no twists',
				image: '',
			},
			{
				text: 'Fold the top of the canopy downward, creating a top-fold that will fill out the top of the container.',
				image: '',
			},
			{
				text: 'Cell nose-tips are now exposed. Position yourself so your legs can maintain the rest of the pack job while you dress the nose. Fold outer three cells symmetrically, and open up the center cell to receive air first.',
				image: '',
			},
			{
				text: 'Close the top of the container, observing proper flap order, and ensuring a clear properly-routed Bridle.',
				image: '14-top-closed.jpeg',
			},
			{
				text: 'Position yourself at the bottom of the container, and fold the remainder of the canopy underneath the side flaps, so that the bottom fold will fill out the bottom of the container.',
				image: '',
			},
			{
				text: 'Ensure that the Bridle attachment point is on top of the packjob, not buried within.',
				image: '',
			},
			{
				text: 'Close the bottom pin, again ensuring proper Bridle routing and pin orientation.',
				image: '15-bottom-pin.jpeg',
			},
			{ text: 'Massage away bulges and poor pin tension.', image: '' },
		],
	},
	{
		primaryStep: 'Stow Pilot Chute',
		subSteps: [
			{
				text: 'Remove any twists from the Bridle and check air-worthiness of the Pilot Chute.',
				image: '',
			},
			{
				text: 'Slide a grip up to the top of the mesh, creating a mushroom shape.',
				image: '16-pc-updown-mushroom.jpeg',
			},
			{
				text: 'Place that mushroom up-side-down on top of the container, folding the mesh to the outer edge and back to the middle of the PC.',
				image: '',
			},
			{ text: 'S-fold the Bridle on top of this mesh fold.', image: '17-pc-sfolds.jpeg' },
			{
				text: 'Fold the Pilot-Chute so that the end of the Bridle s-folds create a bulge pushing into the apex of the PC.',
				image: '',
			},
			{ text: 'Mash down all sides of the PC evenly', image: '' },
			{
				text: 'Slide the Pilot-Chute evenly into the BOC, such that it will slide out smoothly during deployment',
				image: '',
			},
			{
				text: 'Seat the Pilot-Chute deep enough to ensure it doesn’t come out prematurely, but leave enough of a handle to ensure a good grip on the first attempt.',
				image: '',
			},
			{
				text: 'Tuck the exposed portion of the Bridle (between the BOC and the bottom pin) underneath the side-flap so that it is protected but not deep enough to possibly catch inside the packjob.',
				image: '18-finished.jpeg',
			},
		],
	},
	{ primaryStep: 'Jump & Repeat', subSteps: [] },
];
