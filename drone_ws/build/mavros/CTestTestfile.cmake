# CMake generated Testfile for 
# Source directory: /home/eddye/drone_ws/src/mavros/mavros
# Build directory: /home/eddye/drone_ws/build/mavros
# 
# This file includes the relevant testing commands required for 
# testing this directory and lists subdirectories to be tested as well.
add_test(_ctest_mavros_gtest_libmavros-frame-conversions-test "/home/eddye/drone_ws/build/mavros/catkin_generated/env_cached.sh" "/usr/bin/python3" "/opt/ros/noetic/share/catkin/cmake/test/run_tests.py" "/home/eddye/drone_ws/build/mavros/test_results/mavros/gtest-libmavros-frame-conversions-test.xml" "--return-code" "/home/eddye/drone_ws/devel/.private/mavros/lib/mavros/libmavros-frame-conversions-test --gtest_output=xml:/home/eddye/drone_ws/build/mavros/test_results/mavros/gtest-libmavros-frame-conversions-test.xml")
set_tests_properties(_ctest_mavros_gtest_libmavros-frame-conversions-test PROPERTIES  _BACKTRACE_TRIPLES "/opt/ros/noetic/share/catkin/cmake/test/tests.cmake;160;add_test;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;98;catkin_run_tests_target;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;37;_catkin_add_google_test;/home/eddye/drone_ws/src/mavros/mavros/CMakeLists.txt;226;catkin_add_gtest;/home/eddye/drone_ws/src/mavros/mavros/CMakeLists.txt;0;")
add_test(_ctest_mavros_gtest_libmavros-sensor-orientation-test "/home/eddye/drone_ws/build/mavros/catkin_generated/env_cached.sh" "/usr/bin/python3" "/opt/ros/noetic/share/catkin/cmake/test/run_tests.py" "/home/eddye/drone_ws/build/mavros/test_results/mavros/gtest-libmavros-sensor-orientation-test.xml" "--return-code" "/home/eddye/drone_ws/devel/.private/mavros/lib/mavros/libmavros-sensor-orientation-test --gtest_output=xml:/home/eddye/drone_ws/build/mavros/test_results/mavros/gtest-libmavros-sensor-orientation-test.xml")
set_tests_properties(_ctest_mavros_gtest_libmavros-sensor-orientation-test PROPERTIES  _BACKTRACE_TRIPLES "/opt/ros/noetic/share/catkin/cmake/test/tests.cmake;160;add_test;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;98;catkin_run_tests_target;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;37;_catkin_add_google_test;/home/eddye/drone_ws/src/mavros/mavros/CMakeLists.txt;229;catkin_add_gtest;/home/eddye/drone_ws/src/mavros/mavros/CMakeLists.txt;0;")
add_test(_ctest_mavros_gtest_libmavros-quaternion-utils-test "/home/eddye/drone_ws/build/mavros/catkin_generated/env_cached.sh" "/usr/bin/python3" "/opt/ros/noetic/share/catkin/cmake/test/run_tests.py" "/home/eddye/drone_ws/build/mavros/test_results/mavros/gtest-libmavros-quaternion-utils-test.xml" "--return-code" "/home/eddye/drone_ws/devel/.private/mavros/lib/mavros/libmavros-quaternion-utils-test --gtest_output=xml:/home/eddye/drone_ws/build/mavros/test_results/mavros/gtest-libmavros-quaternion-utils-test.xml")
set_tests_properties(_ctest_mavros_gtest_libmavros-quaternion-utils-test PROPERTIES  _BACKTRACE_TRIPLES "/opt/ros/noetic/share/catkin/cmake/test/tests.cmake;160;add_test;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;98;catkin_run_tests_target;/opt/ros/noetic/share/catkin/cmake/test/gtest.cmake;37;_catkin_add_google_test;/home/eddye/drone_ws/src/mavros/mavros/CMakeLists.txt;232;catkin_add_gtest;/home/eddye/drone_ws/src/mavros/mavros/CMakeLists.txt;0;")
subdirs("gtest")
