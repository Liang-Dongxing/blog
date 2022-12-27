import{_ as s,c as n,o as a,e as l}from"./app.e2abb5e1.js";const i=JSON.parse('{"title":"\u628A\u524D\u7AEF\u9879\u76EE\u4F7F\u7528 Maven \u6253\u5305\u5230 jar \u5305\u4E2D","description":"","frontmatter":{},"headers":[],"relativePath":"developer/2.md","lastUpdated":1672120791000}'),p={name:"developer/2.md"},o=l(`<h1 id="\u628A\u524D\u7AEF\u9879\u76EE\u4F7F\u7528-maven-\u6253\u5305\u5230-jar-\u5305\u4E2D" tabindex="-1">\u628A\u524D\u7AEF\u9879\u76EE\u4F7F\u7528 Maven \u6253\u5305\u5230 jar \u5305\u4E2D <a class="header-anchor" href="#\u628A\u524D\u7AEF\u9879\u76EE\u4F7F\u7528-maven-\u6253\u5305\u5230-jar-\u5305\u4E2D" aria-hidden="true">#</a></h1><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">plugin</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#676E95;">&lt;!-- exec-maven-plugin\u63D2\u4EF6\u53EF\u4EE5\u6267\u884Ccmd\u547D\u4EE4 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.codehaus.mojo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">exec-maven-plugin</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">3.1.0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">executions</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;">&lt;!-- npm install --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">execution</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">exec-npm-install</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">phase</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">prepare-package</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">phase</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">goal</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">exec</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">goal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">executable</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">npm</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">executable</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">arguments</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">argument</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">install</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">argument</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">arguments</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">workingDirectory</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\${basedir}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">workingDirectory</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">execution</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#676E95;">&lt;!-- npm run build:prod --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">execution</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">exec-npm-run-build</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">phase</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">prepare-package</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">phase</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">goal</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">exec</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">goal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">executable</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">npm</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">executable</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">arguments</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">argument</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">run</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">argument</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">argument</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">build:prod</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">argument</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">arguments</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">workingDirectory</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\${basedir}</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">workingDirectory</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">execution</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">executions</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">plugin</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">plugin</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#676E95;">&lt;!-- \u590D\u5236\u524D\u7AEF\u6253\u5305\u7ED3\u679C --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.apache.maven.plugins</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">maven-resources-plugin</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">executions</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">execution</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">copy-resource</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">phase</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">prepare-package</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">phase</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">goal</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">copy-resources</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">goal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#676E95;">&lt;!-- \u8F93\u51FA\u6587\u4EF6\u8DEF\u5F84 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">outputDirectory</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\${basedir}/target/classes/static</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">outputDirectory</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">resources</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                    </span><span style="color:#676E95;">&lt;!-- \u524D\u7AEF\u4EE3\u7801\u5730\u5740 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">directory</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\${basedir}/dist</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">directory</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">resource</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">resources</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">execution</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">executions</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">plugin</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">plugin</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#676E95;">&lt;!-- \u6267\u884C\u81EA\u52A8\u6E05\u7406\u4EFB\u52A1 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">org.apache.maven.plugins</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">maven-clean-plugin</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">executions</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">execution</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">clean-dist</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">phase</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">prepare-package</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">phase</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">goal</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">clean</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">goal</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">goals</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#676E95;">&lt;!-- \u4E0D\u6E05\u7406\u9ED8\u8BA4\u8F93\u51FA\u8DEF\u5F84 \${basedir}/target --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">excludeDefaultDirectories</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">true</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">excludeDefaultDirectories</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#676E95;">&lt;!-- \u6E05\u7406\u524D\u7AEF\u8F93\u51FA\u8DEF\u5F84 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">filesets</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">fileset</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">directory</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\${basedir}/dist</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">directory</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">fileset</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">filesets</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">execution</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">executions</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">plugin</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">build</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,2),t=[o];function e(c,r,D,F,y,C){return a(),n("div",null,t)}const g=s(p,[["render",e]]);export{i as __pageData,g as default};
