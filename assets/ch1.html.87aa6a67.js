import{_ as t,o as s,c as o,a as e,F as i,d as n}from"./app.a957722f.js";const r={},c=n('<h1 id="you-don-t-know-js-yet-scope-closures-2nd-edition" tabindex="-1"><a class="header-anchor" href="#you-don-t-know-js-yet-scope-closures-2nd-edition" aria-hidden="true">#</a> You Don&#39;t Know JS Yet: Scope &amp; Closures - 2nd Edition</h1><h1 id="chapter-1-what-s-the-scope" tabindex="-1"><a class="header-anchor" href="#chapter-1-what-s-the-scope" aria-hidden="true">#</a> Chapter 1: What&#39;s the Scope?</h1><p>By the time you&#39;ve written your first few programs, you&#39;re likely getting somewhat comfortable with creating variables and storing values in them. Working with variables is one of the most foundational things we do in programming!</p><p>But you may not have considered very closely the underlying mechanisms used by the engine to organize and manage these variables. I don&#39;t mean how the memory is allocated on the computer, but rather: how does JS know which variables are accessible by any given statement, and how does it handle two variables of the same name?</p><p>The answers to questions like these take the form of well-defined rules called scope. This book will dig through all aspects of scope\u2014how it works, what it&#39;s useful for, gotchas to avoid\u2014and then point toward common scope patterns that guide the structure of programs.</p><p>Our first step is to uncover how the JS engine processes our program <strong>before</strong> it runs.</p><h2 id="about-this-book" tabindex="-1"><a class="header-anchor" href="#about-this-book" aria-hidden="true">#</a> About This Book</h2><p>Welcome to book 2 in the <em>You Don&#39;t Know JS Yet</em> series! If you already finished <em>Get Started</em> (the first book), you&#39;re in the right spot! If not, before you proceed I encourage you to <em>start there</em> for the best foundation.</p><p>Our focus will be the first of three pillars in the JS language: the scope system and its function closures, as well as the power of the module design pattern.</p><p>JS is typically classified as an interpreted scripting language, so it&#39;s assumed by most that JS programs are processed in a single, top-down pass. But JS is in fact parsed/compiled in a separate phase <strong>before execution begins</strong>. The code author&#39;s decisions on where to place variables, functions, and blocks with respect to each other are analyzed according to the rules of scope, during the initial parsing/compilation phase. The resulting scope structure is generally unaffected by runtime conditions.</p><p>JS functions are themselves first-class values; they can be assigned and passed around just like numbers or strings. But since these functions hold and access variables, they maintain their original scope no matter where in the program the functions are eventually executed. This is called closure.</p><p>Modules are a code organization pattern characterized by public methods that have privileged access (via closure) to hidden variables and functions in the internal scope of the module.</p><h2 id="compiled-vs-interpreted" tabindex="-1"><a class="header-anchor" href="#compiled-vs-interpreted" aria-hidden="true">#</a> Compiled vs. Interpreted</h2><p>You may have heard of <em>code compilation</em> before, but perhaps it seems like a mysterious black box where source code slides in one end and executable programs pop out the other.</p><p>It&#39;s not mysterious or magical, though. Code compilation is a set of steps that process the text of your code and turn it into a list of instructions the computer can understand. Typically, the whole source code is transformed at once, and those resulting instructions are saved as output (usually in a file) that can later be executed.</p><p>You also may have heard that code can be <em>interpreted</em>, so how is that different from being <em>compiled</em>?</p><p>Interpretation performs a similar task to compilation, in that it transforms your program into machine-understandable instructions. But the processing model is different. Unlike a program being compiled all at once, with interpretation the source code is transformed line by line; each line or statement is executed before immediately proceeding to processing the next line of the source code.</p>',17),p=["src"],l=e("figcaption",null,[e("em",null,"Fig. 1: Compiled vs. Interpreted Code")],-1),d=e("br",null,null,-1),u=e("br",null,null,-1),h=n(`<p>Figure 1 illustrates compilation vs. interpretation of programs.</p><p>Are these two processing models mutually exclusive? Generally, yes. However, the issue is more nuanced, because interpretation can actually take other forms than just operating line by line on source code text. Modern JS engines actually employ numerous variations of both compilation and interpretation in the handling of JS programs.</p><p>Recall that we surveyed this topic in Chapter 1 of the <em>Get Started</em> book. Our conclusion there is that JS is most accurately portrayed as a <strong>compiled language</strong>. For the benefit of readers here, the following sections will revisit and expand on that assertion.</p><h2 id="compiling-code" tabindex="-1"><a class="header-anchor" href="#compiling-code" aria-hidden="true">#</a> Compiling Code</h2><p>But first, why does it even matter whether JS is compiled or not?</p><p>Scope is primarily determined during compilation, so understanding how compilation and execution relate is key in mastering scope.</p><p>In classic compiler theory, a program is processed by a compiler in three basic stages:</p><ol><li><p><strong>Tokenizing/Lexing:</strong> breaking up a string of characters into meaningful (to the language) chunks, called tokens. For instance, consider the program: <code>var a = 2;</code>. This program would likely be broken up into the following tokens: <code>var</code>, <code>a</code>, <code>=</code>, <code>2</code>, and <code>;</code>. Whitespace may or may not be persisted as a token, depending on whether it&#39;s meaningful or not.</p><p>(The difference between tokenizing and lexing is subtle and academic, but it centers on whether or not these tokens are identified in a <em>stateless</em> or <em>stateful</em> way. Put simply, if the tokenizer were to invoke stateful parsing rules to figure out whether <code>a</code> should be considered a distinct token or just part of another token, <em>that</em> would be <strong>lexing</strong>.)</p></li><li><p><strong>Parsing:</strong> taking a stream (array) of tokens and turning it into a tree of nested elements, which collectively represent the grammatical structure of the program. This is called an Abstract Syntax Tree (AST).</p><p>For example, the tree for <code>var a = 2;</code> might start with a top-level node called <code>VariableDeclaration</code>, with a child node called <code>Identifier</code> (whose value is <code>a</code>), and another child called <code>AssignmentExpression</code> which itself has a child called <code>NumericLiteral</code> (whose value is <code>2</code>).</p></li><li><p><strong>Code Generation:</strong> taking an AST and turning it into executable code. This part varies greatly depending on the language, the platform it&#39;s targeting, and other factors.</p><p>The JS engine takes the just described AST for <code>var a = 2;</code> and turns it into a set of machine instructions to actually <em>create</em> a variable called <code>a</code> (including reserving memory, etc.), and then store a value into <code>a</code>.</p></li></ol><table><thead><tr><th style="text-align:left;">NOTE:</th></tr></thead><tbody><tr><td style="text-align:left;">The implementation details of a JS engine (utilizing system memory resources, etc.) is much deeper than we will dig here. We&#39;ll keep our focus on the observable behavior of our programs and let the JS engine manage those deeper system-level abstractions.</td></tr></tbody></table><p>The JS engine is vastly more complex than <em>just</em> these three stages. In the process of parsing and code generation, there are steps to optimize the performance of the execution (i.e., collapsing redundant elements). In fact, code can even be re-compiled and re-optimized during the progression of execution.</p><p>So, I&#39;m painting only with broad strokes here. But you&#39;ll see shortly why <em>these</em> details we <em>do</em> cover, even at a high level, are relevant.</p><p>JS engines don&#39;t have the luxury of an abundance of time to perform their work and optimizations, because JS compilation doesn&#39;t happen in a build step ahead of time, as with other languages. It usually must happen in mere microseconds (or less!) right before the code is executed. To ensure the fastest performance under these constraints, JS engines use all kinds of tricks (like JITs, which lazy compile and even hot re-compile); these are well beyond the &quot;scope&quot; of our discussion here.</p><h3 id="required-two-phases" tabindex="-1"><a class="header-anchor" href="#required-two-phases" aria-hidden="true">#</a> Required: Two Phases</h3><p>To state it as simply as possible, the most important observation we can make about processing of JS programs is that it occurs in (at least) two phases: parsing/compilation first, then execution.</p><p>The separation of a parsing/compilation phase from the subsequent execution phase is observable fact, not theory or opinion. While the JS specification does not require &quot;compilation&quot; explicitly, it requires behavior that is essentially only practical with a compile-then-execute approach.</p><p>There are three program characteristics you can observe to prove this to yourself: syntax errors, early errors, and hoisting.</p><h4 id="syntax-errors-from-the-start" tabindex="-1"><a class="header-anchor" href="#syntax-errors-from-the-start" aria-hidden="true">#</a> Syntax Errors from the Start</h4><p>Consider this program:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> greeting <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>

greeting <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token string">&quot;Hi&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// SyntaxError: unexpected token .</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>This program produces no output (<code>&quot;Hello&quot;</code> is not printed), but instead throws a <code>SyntaxError</code> about the unexpected <code>.</code> token right before the <code>&quot;Hi&quot;</code> string. Since the syntax error happens after the well-formed <code>console.log(..)</code> statement, if JS was executing top-down line by line, one would expect the <code>&quot;Hello&quot;</code> message being printed before the syntax error being thrown. That doesn&#39;t happen.</p><p>In fact, the only way the JS engine could know about the syntax error on the third line, before executing the first and second lines, is by the JS engine first parsing the entire program before any of it is executed.</p><h4 id="early-errors" tabindex="-1"><a class="header-anchor" href="#early-errors" aria-hidden="true">#</a> Early Errors</h4><p>Next, consider:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Howdy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">saySomething</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Uncaught SyntaxError: Duplicate parameter name not</span>
<span class="token comment">// allowed in this context</span>

<span class="token keyword">function</span> <span class="token function">saySomething</span><span class="token punctuation">(</span><span class="token parameter">greeting<span class="token punctuation">,</span>greeting</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;use strict&quot;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>The <code>&quot;Howdy&quot;</code> message is not printed, despite being a well-formed statement.</p><p>Instead, just like the snippet in the previous section, the <code>SyntaxError</code> here is thrown before the program is executed. In this case, it&#39;s because strict-mode (opted in for only the <code>saySomething(..)</code> function here) forbids, among many other things, functions to have duplicate parameter names; this has always been allowed in non-strict-mode.</p><p>The error thrown is not a syntax error in the sense of being a malformed string of tokens (like <code>.&quot;Hi&quot;</code> prior), but in strict-mode is nonetheless required by the specification to be thrown as an &quot;early error&quot; before any execution begins.</p><p>But how does the JS engine know that the <code>greeting</code> parameter has been duplicated? How does it know that the <code>saySomething(..)</code> function is even in strict-mode while processing the parameter list (the <code>&quot;use strict&quot;</code> pragma appears only later, in the function body)?</p><p>Again, the only reasonable explanation is that the code must first be <em>fully</em> parsed before any execution occurs.</p><h4 id="hoisting" tabindex="-1"><a class="header-anchor" href="#hoisting" aria-hidden="true">#</a> Hoisting</h4><p>Finally, consider:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">saySomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> greeting <span class="token operator">=</span> <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">{</span>
        greeting <span class="token operator">=</span> <span class="token string">&quot;Howdy&quot;</span><span class="token punctuation">;</span>  <span class="token comment">// error comes from here</span>
        <span class="token keyword">let</span> greeting <span class="token operator">=</span> <span class="token string">&quot;Hi&quot;</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeting<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">saySomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ReferenceError: Cannot access &#39;greeting&#39; before</span>
<span class="token comment">// initialization</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>The noted <code>ReferenceError</code> occurs from the line with the statement <code>greeting = &quot;Howdy&quot;</code>. What&#39;s happening is that the <code>greeting</code> variable for that statement belongs to the declaration on the next line, <code>let greeting = &quot;Hi&quot;</code>, rather than to the previous <code>var greeting = &quot;Hello&quot;</code> statement.</p><p>The only way the JS engine could know, at the line where the error is thrown, that the <em>next statement</em> would declare a block-scoped variable of the same name (<code>greeting</code>) is if the JS engine had already processed this code in an earlier pass, and already set up all the scopes and their variable associations. This processing of scopes and declarations can only accurately be accomplished by parsing the program before execution.</p><p>The <code>ReferenceError</code> here technically comes from <code>greeting = &quot;Howdy&quot;</code> accessing the <code>greeting</code> variable <strong>too early</strong>, a conflict referred to as the Temporal Dead Zone (TDZ). Chapter 5 will cover this in more detail.</p><table><thead><tr><th style="text-align:left;">WARNING:</th></tr></thead><tbody><tr><td style="text-align:left;">It&#39;s often asserted that <code>let</code> and <code>const</code> declarations are not hoisted, as an explanation of the TDZ behavior just illustrated. But this is not accurate. We&#39;ll come back and explain both the hoisting and TDZ of <code>let</code>/<code>const</code> in Chapter 5.</td></tr></tbody></table><p>Hopefully you&#39;re now convinced that JS programs are parsed before any execution begins. But does it prove they are compiled?</p><p>This is an interesting question to ponder. Could JS parse a program, but then execute that program by <em>interpreting</em> operations represented in the AST <strong>without</strong> first compiling the program? Yes, that is <em>possible</em>. But it&#39;s extremely unlikely, mostly because it would be extremely inefficient performance wise.</p><p>It&#39;s hard to imagine a production-quality JS engine going to all the trouble of parsing a program into an AST, but not then converting (aka, &quot;compiling&quot;) that AST into the most efficient (binary) representation for the engine to then execute.</p><p>Many have endeavored to split hairs with this terminology, as there&#39;s plenty of nuance and &quot;well, actually...&quot; interjections floating around. But in spirit and in practice, what the engine is doing in processing JS programs is <strong>much more alike compilation</strong> than not.</p><p>Classifying JS as a compiled language is not concerned with the distribution model for its binary (or byte-code) executable representations, but rather in keeping a clear distinction in our minds about the phase where JS code is processed and analyzed; this phase observably and indisputedly happens <em>before</em> the code starts to be executed.</p><p>We need proper mental models of how the JS engine treats our code if we want to understand JS and scope effectively.</p><h2 id="compiler-speak" tabindex="-1"><a class="header-anchor" href="#compiler-speak" aria-hidden="true">#</a> Compiler Speak</h2><p>With awareness of the two-phase processing of a JS program (compile, then execute), let&#39;s turn our attention to how the JS engine identifies variables and determines the scopes of a program as it is compiled.</p><p>First, let&#39;s examine a simple JS program to use for analysis over the next several chapters:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> students <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Kyle&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">73</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Suzy&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">112</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Frank&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Sarah&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">getStudentName</span><span class="token punctuation">(</span><span class="token parameter">studentID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> student <span class="token keyword">of</span> students<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>student<span class="token punctuation">.</span>id <span class="token operator">==</span> studentID<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> student<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> nextStudent <span class="token operator">=</span> <span class="token function">getStudentName</span><span class="token punctuation">(</span><span class="token number">73</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nextStudent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Suzy</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>Other than declarations, all occurrences of variables/identifiers in a program serve in one of two &quot;roles&quot;: either they&#39;re the <em>target</em> of an assignment or they&#39;re the <em>source</em> of a value.</p><p>(When I first learned compiler theory while earning my computer science degree, we were taught the terms &quot;LHS&quot; (aka, <em>target</em>) and &quot;RHS&quot; (aka, <em>source</em>) for these roles, respectively. As you might guess from the &quot;L&quot; and the &quot;R&quot;, the acronyms mean &quot;Left-Hand Side&quot; and &quot;Right-Hand Side&quot;, as in left and right sides of an <code>=</code> assignment operator. However, assignment targets and sources don&#39;t always literally appear on the left or right of an <code>=</code>, so it&#39;s probably clearer to think in terms of <em>target</em> / <em>source</em> rather than <em>left</em> / <em>right</em>.)</p><p>How do you know if a variable is a <em>target</em>? Check if there is a value that is being assigned to it; if so, it&#39;s a <em>target</em>. If not, then the variable is a <em>source</em>.</p><p>For the JS engine to properly handle a program&#39;s variables, it must first label each occurrence of a variable as <em>target</em> or <em>source</em>. We&#39;ll dig in now to how each role is determined.</p><h3 id="targets" tabindex="-1"><a class="header-anchor" href="#targets" aria-hidden="true">#</a> Targets</h3><p>What makes a variable a <em>target</em>? Consider:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>students <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token comment">// ..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>This statement is clearly an assignment operation; remember, the <code>var students</code> part is handled entirely as a declaration at compile time, and is thus irrelevant during execution; we left it out for clarity and focus. Same with the <code>nextStudent = getStudentName(73)</code> statement.</p><p>But there are three other <em>target</em> assignment operations in the code that are perhaps less obvious. One of them:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> student <span class="token keyword">of</span> students<span class="token punctuation">)</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>That statement assigns a value to <code>student</code> for each iteration of the loop. Another <em>target</em> reference:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getStudentName</span><span class="token punctuation">(</span><span class="token number">73</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>But how is that an assignment to a <em>target</em>? Look closely: the argument <code>73</code> is assigned to the parameter <code>studentID</code>.</p><p>And there&#39;s one last (subtle) <em>target</em> reference in our program. Can you spot it?</p><p>..</p><p>..</p><p>..</p><p>Did you identify this one?</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getStudentName</span><span class="token punctuation">(</span><span class="token parameter">studentID</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>A <code>function</code> declaration is a special case of a <em>target</em> reference. You can think of it sort of like <code>var getStudentName = function(studentID)</code>, but that&#39;s not exactly accurate. An identifier <code>getStudentName</code> is declared (at compile time), but the <code>= function(studentID)</code> part is also handled at compilation; the association between <code>getStudentName</code> and the function is automatically set up at the beginning of the scope rather than waiting for an <code>=</code> assignment statement to be executed.</p><table><thead><tr><th style="text-align:left;">NOTE:</th></tr></thead><tbody><tr><td style="text-align:left;">This automatic association of function and variable is referred to as &quot;function hoisting&quot;, and is covered in detail in Chapter 5.</td></tr></tbody></table><h3 id="sources" tabindex="-1"><a class="header-anchor" href="#sources" aria-hidden="true">#</a> Sources</h3><p>So we&#39;ve identified all five <em>target</em> references in the program. The other variable references must then be <em>source</em> references (because that&#39;s the only other option!).</p><p>In <code>for (let student of students)</code>, we said that <code>student</code> is a <em>target</em>, but <code>students</code> is a <em>source</em> reference. In the statement <code>if (student.id == studentID)</code>, both <code>student</code> and <code>studentID</code> are <em>source</em> references. <code>student</code> is also a <em>source</em> reference in <code>return student.name</code>.</p><p>In <code>getStudentName(73)</code>, <code>getStudentName</code> is a <em>source</em> reference (which we hope resolves to a function reference value). In <code>console.log(nextStudent)</code>, <code>console</code> is a <em>source</em> reference, as is <code>nextStudent</code>.</p><table><thead><tr><th style="text-align:left;">NOTE:</th></tr></thead><tbody><tr><td style="text-align:left;">In case you were wondering, <code>id</code>, <code>name</code>, and <code>log</code> are all properties, not variable references.</td></tr></tbody></table><p>What&#39;s the practical importance of understanding <em>targets</em> vs. <em>sources</em>? In Chapter 2, we&#39;ll revisit this topic and cover how a variable&#39;s role impacts its lookup (specifically, if the lookup fails).</p><h2 id="cheating-runtime-scope-modifications" tabindex="-1"><a class="header-anchor" href="#cheating-runtime-scope-modifications" aria-hidden="true">#</a> Cheating: Runtime Scope Modifications</h2><p>It should be clear by now that scope is determined as the program is compiled, and should not generally be affected by runtime conditions. However, in non-strict-mode, there are technically still two ways to cheat this rule, modifying a program&#39;s scopes during runtime.</p><p>Neither of these techniques <em>should</em> be used\u2014they&#39;re both dangerous and confusing, and you should be using strict-mode (where they&#39;re disallowed) anyway. But it&#39;s important to be aware of them in case you run across them in some programs.</p><p>The <code>eval(..)</code> function receives a string of code to compile and execute on the fly during the program runtime. If that string of code has a <code>var</code> or <code>function</code> declaration in it, those declarations will modify the current scope that the <code>eval(..)</code> is currently executing in:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">badIdea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">&quot;var oops = &#39;Ugh!&#39;;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oops<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">badIdea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Ugh!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>If the <code>eval(..)</code> had not been present, the <code>oops</code> variable in <code>console.log(oops)</code> would not exist, and would throw a <code>ReferenceError</code>. But <code>eval(..)</code> modifies the scope of the <code>badIdea()</code> function at runtime. This is bad for many reasons, including the performance hit of modifying the already compiled and optimized scope, every time <code>badIdea()</code> runs.</p><p>The second cheat is the <code>with</code> keyword, which essentially dynamically turns an object into a local scope\u2014its properties are treated as identifiers in that new scope&#39;s block:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> badIdea <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">oops</span><span class="token operator">:</span> <span class="token string">&quot;Ugh!&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">with</span> <span class="token punctuation">(</span>badIdea<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>oops<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// Ugh!</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The global scope was not modified here, but <code>badIdea</code> was turned into a scope at runtime rather than compile time, and its property <code>oops</code> becomes a variable in that scope. Again, this is a terrible idea, for performance and readability reasons.</p><p>At all costs, avoid <code>eval(..)</code> (at least, <code>eval(..)</code> creating declarations) and <code>with</code>. Again, neither of these cheats is available in strict-mode, so if you just use strict-mode (you should!) then the temptation goes away!</p><h2 id="lexical-scope" tabindex="-1"><a class="header-anchor" href="#lexical-scope" aria-hidden="true">#</a> Lexical Scope</h2><p>We&#39;ve demonstrated that JS&#39;s scope is determined at compile time; the term for this kind of scope is &quot;lexical scope&quot;. &quot;Lexical&quot; is associated with the &quot;lexing&quot; stage of compilation, as discussed earlier in this chapter.</p><p>To narrow this chapter down to a useful conclusion, the key idea of &quot;lexical scope&quot; is that it&#39;s controlled entirely by the placement of functions, blocks, and variable declarations, in relation to one another.</p><p>If you place a variable declaration inside a function, the compiler handles this declaration as it&#39;s parsing the function, and associates that declaration with the function&#39;s scope. If a variable is block-scope declared (<code>let</code> / <code>const</code>), then it&#39;s associated with the nearest enclosing <code>{ .. }</code> block, rather than its enclosing function (as with <code>var</code>).</p><p>Furthermore, a reference (<em>target</em> or <em>source</em> role) for a variable must be resolved as coming from one of the scopes that are <em>lexically available</em> to it; otherwise the variable is said to be &quot;undeclared&quot; (which usually results in an error!). If the variable is not declared in the current scope, the next outer/enclosing scope will be consulted. This process of stepping out one level of scope nesting continues until either a matching variable declaration can be found, or the global scope is reached and there&#39;s nowhere else to go.</p><p>It&#39;s important to note that compilation doesn&#39;t actually <em>do anything</em> in terms of reserving memory for scopes and variables. None of the program has been executed yet.</p><p>Instead, compilation creates a map of all the lexical scopes that lays out what the program will need while it executes. You can think of this plan as inserted code for use at runtime, which defines all the scopes (aka, &quot;lexical environments&quot;) and registers all the identifiers (variables) for each scope.</p><p>In other words, while scopes are identified during compilation, they&#39;re not actually created until runtime, each time a scope needs to run. In the next chapter, we&#39;ll sketch out the conceptual foundations for lexical scope.</p>`,91);function m(a,g){return s(),o(i,null,[c,e("figure",null,[e("img",{src:a.$withBase("/you-dont-know-js-v2/scope-closures/images/fig1.png"),width:"650",alt:"Code Compilation and Code Interpretation",align:"center"},null,8,p),l,d,u]),h],64)}var f=t(r,[["render",m],["__file","ch1.html.vue"]]);export{f as default};