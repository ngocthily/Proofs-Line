# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all
Answer.destroy_all

demo = User.create!(username: 'demo', email: 'demo@proofsline.com', password: 'password')
ngoc = User.create!(username: 'ngoc', email: 'ngoc@proofsline.com', password: 'ngociscool!')
euclid = User.create!(username: 'euclid', email: 'euclid@alexandria.com', password: 'geometrybelit')
cady = User.create!(username: 'cady', email: 'cady123@meangirls.com', password: 'wednesdayspink123')
regina = User.create!(username: 'regina', email: 'regina@meangirls.com', password: '1233456l')
euler = User.create!(username: 'euler', email: 'euler@complexanalysis.math', password: 'eixcosxisinx')
newton = User.create!(username: 'newton', email: 'newton@gravity.com', password: 'gravitybecool')
gauss = User.create!(username: 'guass', email: 'gauss@bell.curve', password: 'gaussiandistribution')
poincare = User.create!(username: 'poincare', email: 'poincare@top.fr', password: 'topologywascool')
pascal = User.create!(username: 'pascal', email: 'triangles@yahoo.com', password: 'mytriangle')
pythagoras = User.create!(username: 'pythagoras', email: 'pyth@greek.com', password: 'pythagoreantheorem')
einstein = User.create!(username: 'einstein', email: 'thecoolphysicist@uzh.ch', password: 'emc2em2')
kevin = User.create!(username: 'kev', email: 'kev@kev.kev', password: 'kevinisbabe')
perelman = User.create!(username: 'perelman', email: 'perelmang@neopets.com', password: 'iprovepoincare')

question1 = Question.create!(title: 'Demo title', 
                                body: 'The demo should be able to edit and delete this question', 
                                author_id: demo.id)
question2 = Question.create!(title: 'Exterior Angle Theorem', 
                                body: 'Given triangle ABC, 
                                if one of the sides (AC) is extended, then the exterior angle produced (angle DAB) is 
                                greater than either of the two interior and opposite angles (angle BCA or angle ABC)', 
                                author_id: cady.id)
question3 = Question.create!(title: 'Find the limit', 
                                body: 'What is the limit of sin(1/x) as x approaches 0?', 
                                author_id: regina.id)
question4 = Question.create!(title: 'Gauss quadrature method in MATLAB', 
                                body: '<p>Can someone explain how this code works? </p>
                                        <p>function [I] = gauss(f,a,b)</p>
                                        <p>%Basic two-point Gauss procedure</p>
                                        <p>x=[-0.5773502692,0.5773502692];</p>
                                        <p>c=[1,1];</p>
                                        <p>for i=1:length(x)</p>
                                        <p>nc(i)=c(i)*((b-a)/2);</p>
                                        <p>nx(i)=(((b-a)*x(i))+(b+a))/2;</p>
                                        <p>end</p>
                                        <p>I=(nc(1)*f(nx(1)))+(nc(2)*f(nx(2)));</p>
                                    <p>end</p>',
                                author_id: euclid.id)
question5 = Question.create!(title: 'Partial differential equations textbook recommendations',
                                body: "Looking for textbook recommendations for a first timer learning partial 
                                        differential equations. I'm taking a college course next quarter on it and
                                        wanted a head start. The class recommendation is 'A First Course in Partial 
                                        Differential Equations by H.F. Weinberger, is it worth the purchase?",
                                        author_id: ngoc.id)
question6 = Question.create!(title: 'group theory',
                                body: '<p> Why is this statement false? </p>
                                        <p>The binary structure (S, max) has an identity element, where S =
                                        {x in R : 0 < x < 1}</p>',
                                author_id: euler.id)
question7 = Question.create!(title: 'abstract algebra',
                                body: "<p>Why isn't the function f: R->R where f(x)=x^2 is not one-to-one?</p>",
                                author_id: newton.id)
question8 = Question.create!(title: 'P versus NP problem',
                                body: 'Why is this problem so difficult to solve',
                                author_id: gauss.id)
question9 = Question.create!(title: 'Solve',
                                body: 'Someone needs to solve my conjecture',
                                author_id: poincare.id)
question10 = Question.create!(title: 'Elementary Analysis',
                                body: '<p>Can someone help me figure out how to attempt this problem?</p>
                                        <p>Let A, B be non-empty bounded subsets of R, and let S be the set 
                                        of all sums a+b where a is in A and b is in B:</p>
                                        <p>Prove that sup S = sup A + sup B</p>
                                        <p>Prove that inf S = inf A + inf B</p>',
                                author_id: pascal.id)
question11 = Question.create!(title: 'Style math papers',
                                body: 'What do people use to write math papers',
                                author_id: einstein.id)
question12 = Question.create!(title: 'Recursive problem',
                                body: "<p>A room contains n people. Everybody wants to shake everyone's hand (but not their own)</p>
                                        <p>Suppose that n people require h(n) handshakes. If an (n+1)th person enters the room, how many additional
                                        handshakes are required? Obtain a recurrence relation for h(n+1) in terms on h(n), then prove</p>",
                                author_id: euler.id)
question13 = Question.create!(title: 'Summation of x^n/(1+x^n) converges for x in [0,1)',
                                body: 'how would I go about proving this',
                                author_id: pythagoras.id)
question14 = Question.create!(title: 'Proof for Converse of the Thales theorem',
                                body: 'if a line divides any two sides of a triangle in the same ratio, then the line is parallel to the third side',
                                author_id: cady.id)
question15 = Question.create!(title: 'Fixed point theorem',
                                body: 'Use the Fixed Point Theorem
                                to prove g(x) = 2^-x has an unique fixed point on [1/3,1] and compute p(1) given p(0) = 1/2',
                                author_id: regina.id)
question16 = Question.create!(title: 'Successive Over-Relaxation (SOR) for solving a linear system of equations',
                                body: 'How would I write a MATLAB function for this?',
                                author_id: pythagoras.id)
question17 = Question.create!(title: 'Prove that it is injective',
                                body: 'f: Z -> Z by f: n -> 2n',
                                author_id: kevin.id)
question18 = Question.create!(title: "Numerical analysis",
                                body: "What's the best method to approximate, to within 10^-4, the value of x 
                                that produces the point on the graph of y = 1/x that is closest to (2, 1).",
                                author_id: ngoc.id)
question19 = Question.create!(title: 'Primitive Pythagorean triples',
                                body: 'How do you easily find them?',
                                author_id: cady.id)
question20 = Question.create!(title: 'College math courses',
                                body: "What's the math class you most enjoyed?",
                                author_id: pythagoras.id)

answer1 = Answer.create!(body: 'testing answer', user_id: ngoc.id, question_id: question1.id)
answer2 = Answer.create!(body: 'Since all angles (angle ABC, angle BCA, angle CAB) add up to 180 degrees 
                                and angle DAB and angle CAB add up to 180 degrees too,  then angle ABC + angle
                                BCA is equal to 180 degrees minus angle CAB and angle DAB is equal to 180 degrees 
                                - angle CAB. Combining the last two equations, we have angle DAB is equal to angle 
                                ABC + angle BCA. We can see angle DAB is greater than angle ABC or angle DAB is 
                                greater than angle BCA. Therefore, the exterior angle is greater than either of 
                                the two interior and opposite angles.',
                                user_id: euclid.id,
                                question_id: question2.id)
answer3 = Answer.create!(body: 'the limit does not exist',
                                user_id: cady.id,
                                question_id: question3.id)
answer4 = Answer.create!(body: '0',
                            user_id: demo.id,
                            question_id: question3.id)
answer5 = Answer.create!(body: "<p>It's false because for every x in S we have x/2 in S and max(x,x/2) is not equal to
                            x/2, so x is <strong>not</strong> an identity element for the structure",
                            user_id: ngoc.id,
                            question_id: question6.id)
answer6 = Answer.create!(body: "Because f(2) = f(-2) = 4, but 2 is not equal to -2",
                            user_id: gauss.id,
                            question_id: question7.id)
answer7 = Answer.create!(body: "<p> See 
                                <a href='https://www.claymath.org/millennium-problems/p-vs-np-problem' rel='noopener noreferrer' target='_blank'>
                                 Clay math </a> has a nice example of why</p>",
                            user_id: cady.id,
                            question_id: question8.id)
answer8 = Answer.create!(body: "<p>I already did</p>
                                <p>I posted it on <a href='https://ArXiv.org' rel='noopener noreferrer' target='_blank'> ArXiv </a></p>",
                            user_id: perelman.id,
                            question_id: question9.id)
answer9 = Answer.create!(body: "Can't prove",
                            user_id: regina.id,
                            question_id: question10.id)
answer10 = Answer.create!(body: "People usually use the LaTeX program, which is free",
                            user_id: kevin.id,
                            question_id: question11.id)
answer11 = Answer.create!(body: "The (n+1)th person will have to shake the other n people’s hands. Thus an additional n
                            handshakes are required. The recurrence relation is therefore h(n+1) = h(n) + n. 
                            Knowing this you can prove it easily using induction",
                            user_id: einstein.id,
                            question_id: question12.id)
answer12 = Answer.create!(body: "You can use the ratio test!",
                            user_id: newton.id,
                            question_id: question13.id)
answer13 = Answer.create!(body: "<p>how i did it</p>
                                <p>I set k equal to 1 and start a while loop while k is less than or equal to the 
                                maximum number of iterations N then it will proceed to the following steps. I start 
                                a i for loop for i starts from 1 to n. I set suma equal to zero and then start a j 
                                for loop for j starts from 1 to i-1. I set suma=suma+A(i,j)*x(j). I end this j loop. 
                                I set sumb equal to zero and then start a new j for loop for j starts from i+1 
                                to n. I set sumb=sumb+A(i,j)*XO(j). I end this j for loop. I set sum=suma+sumb 
                                and x(i)= ((1-w)*XO(i))+((w/A(i,i))*(b(i)-sum)). I end the i for loop. I say 
                                if the norm of x-XO is less than the tolerance, then it will break out of the 
                                while loop and display the values of x. I end the if. I set k=k+1. I start 
                                a i for loop for i starts from 1 to n. I set XO(i)=x(i). I end the i for 
                                loop. I end the while loop. I say if k is greater than N, then it will 
                                display “Max number of iterations exceeded”. I end this if. This algorithm
                                is the same as the Gauss-Siedel, except it has a relaxation parameter w. </p>",
                                user_id: ngoc.id,
                                question_id: question16.id)
answer14 = Answer.create!(body: "Newton's method",
                            user_id: newton.id,
                            question_id: question18.id)
answer15 = Answer.create!(body: "<p>Using the Pythagorean Triples Theorem</p>
                                <p>We will get every primitive Pythagorean
                                triple (a, b, c) with a odd and b even by using the formulas
                                a = st, b = (s^2 − t^2)/2, c = (s^2 + t^2)/2, where s > t >= 1 are
                                chosen to be any odd integers with no common factors. </p>",
                                user_id: pythagoras.id,
                                question_id: question19.id)